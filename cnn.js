const pgPromise = require('pg-promise')
const config={
    host:'localhost',
    port:'5432',
    database:'ecommerce',
    user:'postgres',
    password:'postgres'
}
const pgp = pgPromise({})
const db = pgp(config)
exports.db=db