function datapull(x) {const {Client} = require('pg')

const client = new Client({
  user:"postgres",
  host:"localhost",
  database: "Project-3",
  password:"postgres",
  port: 5432
})

client.connect()
.then(() => console.log("Connected Successfully"))
.then(() => client.query(`${x}`))
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end())
}

datapull('Select * from covid');

module.exports = {
  datapull,
};