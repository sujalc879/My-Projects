const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<body style="background-color:red;" > hii <script> alert("hiii Bhava") </script> </body>')
})

app.listen(port)