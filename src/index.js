

// Bring in the module that we installed using npm
var express = require('express');

// Create a new express app, called app.
var app = express();



app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/pets', (req, res) => {
  res.json({
    "data": {
      "pets": [
        {
          "id": 1,
          "name": "Fluffy",
          "age": 5,
          "uri": "/api/pets/1"
        }, {
          "id": 2,
          "name": "Bob",
          "age": 6,
          "uri": "/api/pets/1"
        }
      ]
    }
  }
)
})

app.get('/pets/1', (req, res) => {
  res.json({
    "id": 1,
    "name": "Fluffy",
    "age": 5,
    "type": "dog",
  }
)}
)

app.get('/pets/2', (req, res) => {
  res.json({
    "id": 2,
    "name": "Bob",
    "age": 6,
    "type": "cat"
  }
)}
)


app.listen(8000, () => {
  console.log('Pet app listening on port 8000!')
})
