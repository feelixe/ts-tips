import sqlite from 'sqlite3';

const DB_FILE_PATH = './database.sqlite';

async function getSqliteDatabase() {
  return await new Promise<sqlite.Database>((resolve, reject) => {
    const db = new sqlite.Database(DB_FILE_PATH, (error) => {
      if (error != null) {
        reject(error);
      } else {
        resolve(db);
      }
    });
  });
}

async function getDatabaseClient() {
  const client = await getSqliteDatabase();

  return {
    client,
    [Symbol.dispose]: async () => {
      console.log('cleaning up database connection');
      client.close()
    },
  };
}


{
  using db = await getDatabaseClient();
  const createTableQuery = `
  CREATE TABLE IF NOT EXISTS my_table (
    id INTEGER PRIMARY KEY,
    name TEXT,
    age INTEGER
  )
  `;
  db.client.run(createTableQuery);
}
