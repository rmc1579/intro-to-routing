app.controller('DetailsController', function($scope, $routeParams, DataService){
    var idx = $routeParams.myIndexId; //name of details id template = myIndexId
    $scope.detailPerson = DataService.data[idx];
});