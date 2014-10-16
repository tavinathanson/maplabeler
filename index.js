var express = require('express'),
    swig  = require('swig'),
    app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/node_modules'))
app.set('view engine', 'html')
app.engine('html', swig.renderFile);
app.set('views', __dirname);

app.get('/', function(request, response) {
    response.render('index.html', {});
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
