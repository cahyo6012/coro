require('dotenv').config()
const { Cient } = require('pg')

const { USERNAME, PASSWORD } = process.env

const client  = new Client({
  user: USERNAME,
  password: PASSWORD,
  host: 'coro-rawdata',
  database: 'djpolap2',
  port: 34532,
})

client.connect()

client.query('SELECT NOW()', (err, res), {
  console.log(err ? err.stack : res.rows[0])
  client.end()
})
