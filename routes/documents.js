'use strict';

//helper functions///////////////////////////////////////////////
var collectionNameIsSet = function(args){
    return args !== undefined && typeof args.colname === 'string';
}
var documentBodyIsSet = function(args){
    return args !== undefined && args.docbody !== null
        && typeof args.docbody === 'object';
}



//endpoints///////////////////////////////////////////////////////
var create = function(db){
    return function(req, res, next){
        if(!collectionNameIsSet(req))res.status(400).send('name of collection missing.');
        if(!documentBodyIsSet(req))res.status(400).send('document body missing.');

        //unimplemented
    }
}
var readAll = function(db){
    return function(req, res, next){
        if(!collectionNameIsSet(req.query)){
            res.status(400).send('name of collection missing.');
        }else{
            var collection = db.collection(req.query.colname);
            collection.find().toArray(function(err,docs){
                if(err)res.status(400).send(err);
                res.status(200).send(docs);
            });
        }
    }
};
var readOne = function(db){
    return function(req, res, next){
        var adminDb = db.admin();
        // List all the available databases
        adminDb.listDatabases(function(err, dbs) {
            res.send(dbs);
        });
    }
};


var update = function(db){
    return function(req, res, next){

    }
};
var remove = function(db){
    return function(req, res, next){

    }
};


module.exports = {
    create : create,
    readAll: readAll,
    readOne: readOne,
    update : update,
    remove: remove
}
