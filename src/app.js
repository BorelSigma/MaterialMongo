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
