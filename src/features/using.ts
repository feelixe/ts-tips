import sqlite from 'sqlite3';

const DB_FILE_PATH = './database.sqlite';

// A helper function that returns a Promise for our database connection.
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

// Returns our database client and the new Symbol.dispose
async function getDatabaseClient() {
  const client = await getSqliteDatabase();

  return {
    client,
    [Symbol.dispose]: async () => {
      client.close()
    },
  };
}

// Now we create a dummy scope, when the scope is exited,
// clean up is handled automatically.
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
