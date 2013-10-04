window.app = angular.module('mean', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ui.route', 'mean.system', 'mean.articles', 'mean.projects', 'mean.contacts', 'mean.components', 'mean.filters']);

angular.module('mean.system', []);
angular.module('mean.articles', []);
angular.module('mean.projects', []);
angular.module('mean.contacts', []);
angular.module('mean.components', []);
angular.module('mean.filters', []);



// // Declare app level module which depends on filters, and services
// angular.module('contactPath', ['contactPath.filters', 'contactPath.services', 'contactPath.directives']).
//     run(function ($rootScope) {
//         $rootScope.search = "";
//     }).config(['$routeProvider', function ($routeProvider) {
//     $routeProvider.when('/', {templateUrl:'partials/add.html', controller:AddCtrl})
//     $routeProvider.when('/view/:id', {templateUrl:'partials/view.html', controller:ViewCtrl });
//     $routeProvider.when('/edit/:id', {templateUrl:'partials/edit.html', controller:EditCtrl });
//     $routeProvider.otherwise({redirectTo:'/'});
// }]);  
