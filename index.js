
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)

const xml2js = require('xml2js');

const productXML = 

xml2js.parseString(productXML, { explicitArray : false }, function (err, result) {
    // console.dir will allow us to print the whole object in our console
    console.dir(result); // Output: { Product: { ID: '10', Name: 'Pizza' } }
    // console.dir(result.Product); // Output: { ID: '10', Name: 'Pizza' }
    // console.log(result.Product.ID); // Output: 10
    // console.log(result.Product.Name); // Output: Pizza

    const json = JSON.stringify(result);

    console.log(json); // Output: {"Product":{"ID":"10","Name":"Pizza"}}
});