var express = require('express'),
    MongoClient = require('mongodb').MongoClient,
    collectionRoutes = require('./routes/collections'),
    documentRoutes = require('./routes/documents'),
    bodyParser = require('body-parser');

var app = express();
app.use(express.static('dist'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
var url = 'mongodb://localhost:27017';
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());


MongoClient.connect(url, function(err, db) {

    //manage collection
    app.post("/api/dbcontrol/collection",collectionRoutes.create(db));
    app.delete("/api/dbcontrol/collection",collectionRoutes.remove(db));
    app.get("/api/dbcontrol/collection",collectionRoutes.readAll(db));

    //manage documents
    app.post("/api/dbcontrol/document",documentRoutes.create(db));
    app.delete("/api/dbcontrol/document",documentRoutes.remove(db));
    app.get("/api/dbcontrol/document",documentRoutes.readAll(db));
});

process.on('SIGINT', function() {
    database.close();
});

app.get('/', function(req, res, next){
    res.send(__dirname+'index.html');
});


var server = app.listen(8888, function() {
    console.log('Listening on port %d', server.address().port);
    console.log('Press Ctrl-C to terminate');
});

