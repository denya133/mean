angular.module('mean.contacts').controller('ContactsController', ['$scope', '$routeParams', '$location', 'Global', 'Contacts',
  function ($scope, $routeParams, $location, Global, Contacts) {
    $scope.global = Global;

    $scope.contactdata = {};

    $scope.save = function (contactdata) {
        var id = new Contacts.save({
            name:contactdata.name, 
            phone:contactdata.phone, 
            email:contactdata.email
        });
        
        $location.path('contacts/' + id + '/view');
    };

    $scope.findOne = function () {
        $scope.contact = Contacts.get($routeParams.contactId);
    };    

    $scope.update = function (contactdata) {
        var id = Contacts.update({id:contactdata.id, name:contactdata.name, phone:contactdata.phone, email:contactdata.email});
        $location.path('contacts/' + id + '/view');
    };
    $scope.delete = function (id) {
        Contacts.remove(id);
        $location.path('contacts');
    };

    $scope.contacts = Contacts.contacts;

    $scope.contactLists = Contacts.contactLists;
    $scope.$watch(
        function () {
            return Contacts.contactLists;
        },
        function (value) {
            if (value) {
                $scope.contactLists = Contacts.contactLists;
            }
        }
    );
  }
]);