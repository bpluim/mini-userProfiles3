angular.module('userProfiles').controller('MainController', function($scope, mainService) {
  $scope.getUsers = function() {
    mainService.getUsers().then(function(dataFromService) {
      console.log(dataFromService);
      $scope.users = dataFromService;
    });
  }

  $scope.getUsers();

});
