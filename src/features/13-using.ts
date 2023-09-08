import { Pool } from "pg"

// Returns our database client and the new Symbol.dispose
function getDatabase() {
  const pool = new Pool({
    user: 'username',
    host: 'localhost',
    database: 'database_name',
    password: 'password',
    port: 5432
  });

  return {
    pool,
    [Symbol.dispose]: async () => {
      await pool.end();
    },
  };
}

// Now we create a dummy scope, when the scope is exited,
// Clean up is handled automatically.
{
  using db = getDatabase();
  db.pool.query("SELECT * from table_name");
}

// Today we need to clean up manually and remember to handle errors.
{
  let db = getDatabase();
  try {
    db.pool.query("SELECT * from table_name");
  }
  finally {
    db.pool.end();
  }
}