var express = require('express')
var swig  = require('swig');
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'swig')

app.get('/', function(request, response) {
    var template = swig.compileFile('index.html');
    var output = template({
        title: 'Title',
        message: 'Message'
    });
    response.send(output)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
