app.controller('EventController', ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.event = $routeParams.id;
}]);