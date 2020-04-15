const pg = require('pg');
const fs = require('fs')

const cs = 'postgres://postgres:postgres@localhost:5432/covid19';

const client = new pg.Client(cs);
client.connect();

client.query('SELECT * FROM the_rona').then(res => {

    const data = res.rows;

    fs.writeFileSync('theRona.json', JSON.stringify(data))

}).finally(() => client.end());