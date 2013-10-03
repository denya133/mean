angular.module('mean.contacts').controller('ContactsController', ['$scope', '$routeParams', '$location', 'Global',
  function ($scope, $routeParams, $location, Global) {
    $scope.global = Global;

    $scope.empty = 'empty';
  }
]);