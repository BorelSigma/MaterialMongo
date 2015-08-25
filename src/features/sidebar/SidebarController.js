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