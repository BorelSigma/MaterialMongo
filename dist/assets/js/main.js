'use strict';
angular.module('MongoManager', ['ngRoute', 'ngMaterial','ngMessages', 'ngAnimate'])
.config(['$routeProvider','$mdThemingProvider',function($routeProvider,$mdThemingProvider){

        $routeProvider
            .when('/welcome', {
                templateUrl: 'assets/views/welcome/_view.html',
                controller: 'WelcomeController'
            })
            .otherwise({
                redirectTo:'/welcome'
            });
        $mdThemingProvider.theme('default')
            .primaryPalette('cyan')
            .accentPalette('amber');
}])
.run(['$log', function($log){
    $log.debug("MongoManager running.....");
}]);

angular.module('MongoManager')
    .controller('CollectionListController', ['$scope','$log', 'CollectionAPI', function($scope, $log, CollectionAPI){
        $log.debug('CollectionListController running......');
        var self = this;
        CollectionAPI.read().success(function(res){
          self.collections = res.databases;
        });
    }]);

angular.module('MongoManager')
    .controller('CreateDocController', ['$scope','$log', function($scope, $log){
        $log.debug('CreateDocController running......');
        var self = this;

    }]);
angular.module('MongoManager')
    .controller('SidebarController', ['$scope','$log', function($scope, $log){
        $log.debug('SidebarController running......');
        var self = this;
        self.items = [
            {
                title: 'Collection',
                path:''
            },
            {
                title: 'Create Doc',
                path:''
            }
        ];

    }]);
angular.module('MongoManager')
.controller('WelcomeController', ['$scope','$log', function($scope, $log){
    $log.debug('WelcomeController running......');

}]);
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
