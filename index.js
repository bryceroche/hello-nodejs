const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('finishing up tutorial #2 ... ah yeah!  ADRI FOR LIFE')
})
app.listen(3000, () => console.log('Server running on port 3000'))
