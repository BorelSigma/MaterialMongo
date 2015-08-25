var create = function(db){
    return function(req, res, next){

    }
}
var readAll = function(db){
    return function(req, res, next){
        var adminDb = db.admin();
        // List all the available databases
        adminDb.listDatabases(function(err, dbs) {
            res.send(dbs);
        });
    }
}
var readOne = function(db){
    return function(req, res, next){
        var adminDb = db.admin();
        // List all the available databases
        adminDb.listDatabases(function(err, dbs) {
            res.send(dbs);
        });
    }
}


var update = function(db){
    return function(req, res, next){

    }
}
var remove = function(db){
    return function(req, res, next){

    }
}


module.exports = {
    create : create,
    readAll: readAll,
    readOne: readOne,
    update : update,
    remove: remove
}