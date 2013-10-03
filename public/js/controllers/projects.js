angular.module('mean.projects').controller('ProjectsController', ['$scope', '$routeParams', '$location', 'Global', 'Projects', 
  function ($scope, $routeParams, $location, Global, Projects) {
  	$scope.global = Global;

    $scope.create = function() {
      var project = new Projects({
          name: this.name,
          site: this.site,
          description: this.description
      });

      project.$save(function(response) {
          $location.path("projects/");
      });

      this.name = "";
      this.site = "";
      this.description = "";
    };

    $scope.update = function() {
        var project = $scope.project;
        if (!project.updated) {
            project.updated = [];
        }
        project.updated.push(new Date().getTime());

        project.$update(function() {
            $location.path('projects/');
        });
    };

    $scope.remove = function(project) {
        project.$remove(function() {
            $location.path('projects/');
        });  

        for (var i in $scope.projects) {
            if ($scope.projects[i] == project) {
                $scope.projects.splice(i, 1);
            }
        }
    };

    $scope.find = function(query) {
        Projects.query(query, function(projects) {
            $scope.projects = projects;
        });
    };

    $scope.findOne = function() {
        Projects.get({
            projectId: $routeParams.projectId
        }, function(project) {
            $scope.project = project;
        });
    };
  }
]);