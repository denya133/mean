angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [
    {
        "title": "Articles",
        "link": "articles",
        "arr": [
            {
                "title": "List",
                "link": "articles"
            },
            {
                "title": "Create New Article",
                "link": "articles/create"  
            }
        ]
        
    }, {
        "title": "Projects",
        "link": "projects",
        "arr": [
            {
                "title": "List",
                "link": "projects"
            },
            {
                "title": "Create New Project",
                "link": "projects/create"  
            }
        ]
    }, {
        "title": "Contacts",
        "link": "contacts",
        "arr": [
            {
                "title": "List",
                "link": "contacts"
            },
            {
                "title": "Create New Contact",
                "link": "contacts/create"  
            }
        ]
    }];
}]);