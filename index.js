const express = require('express')
const app = express()
app.use(express.static('public'))
app.listen(3000, () => console.log('Server running on port 3000'))



app.get('/', function (req, res) {
  res.send('Hello World!')
})


app.post('/', function (req, res) {
  res.send('Got a POST request')
})


app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})


app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})

