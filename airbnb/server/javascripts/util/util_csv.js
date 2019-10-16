const parse = require('csv-parse')
const fs = require('fs')
const path = require('path')
const sequelize = require('../util/util_sequelize')
// const Stay = sequelize.import(path.join(__dirname + "../../../models/Stay"))
const Stay = sequelize
console.log(Stay)

// Output
const output = []

// Create the parser
const parser = parse({
    delimiter: ','
})

// Use the readable stream api
parser.on('readable', function () {
    let record
    while (record = parser.read()) {
        output.push(record)
    }
})

// Catch any error
parser.on('error', function (err) {
    console.error(err.message)
})

// When we are done, test that the parsed output matched what expected
parser.on('end', async function () {
    try{
        for (let record of output){
            const [ name, price, guest, type, image, beds, bedrooms, bathrooms, host_id ] = record
            await Stay.create({
                name,
                price,
                guest,
                type,
                image,
                beds,
                bedrooms,
                bathrooms,
                host_id
            })
        }
    } catch (err){
        console.log(err)
    }
})

fs.readFile(path.join(__dirname, '/stay_bulk.csv'), 'utf8', (err, data) => {
    if (err) throw err;
    const records = data.split('\n')
    for(let record of records){
        parser.write(record)
    }

    // Close the readable stream
    parser.end()
});
