const pool = require('../config')
const fs = require('fs')

const seedQuery = fs.readFileSync('db/seeding.sql', {encoding: 'utf-8'})
pool.query(seedQuery, (err, res)=> {
    if(err) throw err;

    console.log('seeding success')
    
    pool.end()
})