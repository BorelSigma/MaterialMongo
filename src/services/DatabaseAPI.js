angular.module('MongoManager')
.factory('CollectionAPI', function($http){
    return {
        read: function(){
            return $http({
                method:'GET',
                url: '/api/dbcontrol/collection'
            });
        }
    };
});
