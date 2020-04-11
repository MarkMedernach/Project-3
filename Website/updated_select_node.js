const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'test',
  password: 'postgres',
  port: 5432,
});

const getUsers = (request, response) => {
    pool.query('SELECT * FROM test', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
};
