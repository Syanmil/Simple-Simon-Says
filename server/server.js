var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/', function(req, res) {
  res.send('oke')
})

app.listen(3000, function(){
  console.log('Connected at port 3000');
})
