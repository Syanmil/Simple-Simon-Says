var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/api/color', function(req, res) {
  res.send(red.blue('green'))
})

let red = {
  blue: function() {
    let randomNine = Math.ceil(Math.random()*9)
    let randomred = Math.ceil(Math.random()*255)
    let randomblue = Math.ceil(Math.random()*255)
    let randomgreen = Math.ceil(Math.random()*255)
    let color = `rgb(${randomred},${randomblue},${randomgreen})`
    return {box: '#box'+randomNine, color: color}
  }
}

app.listen(3000, function(){
  console.log('Connected at port 3000');
})
