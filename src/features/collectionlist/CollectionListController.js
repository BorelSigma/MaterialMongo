angular.module('MongoManager')
    .controller('CollectionListController', ['$scope','$log', 'CollectionAPI', function($scope, $log, CollectionAPI){
        $log.debug('CollectionListController running......');
        var self = this;
        CollectionAPI.read().success(function(res){
          self.collections = res.databases;
        });
    }]);
