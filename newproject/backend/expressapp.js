const express = require('express')
const path = require('path')
const app = express()
const port = 3002

app.get('/', (req, res) => {
  res.send('Helloo World!')
})

app.get('/about', (req, res) => {
    res.send('namaste World!')
    // res.sendFile(path.join(__dirname, 'new.html'))
    // res.status(500)
    // res.json({"book":alchamist})
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})