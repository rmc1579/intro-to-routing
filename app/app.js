var app = angular.module('app', ['ngRoute']);


/*
List
Details
Settings


npgm install -g live-server
navigate to index.html
live-server

*/

app.config(['$routeProvider', 
           function($routeProvider){ //$routeProvider name of parameter
                $routeProvider
                .when('/people', {   //requieres an object
                    templateUrl : 'app/templates/list_template.html',
                    controller : 'ListController'
                })
                .when('/details/:myIndexId', { //requires an object
                    templateUrl: 'app/templates/details_template.html',
                    controller: 'DetailsController',
                    
                })
                .when('/admin' , {
                    template : 'Ya, you are an admin! {{name}}',
                    controller: 'AdminController',
                    resolve : {
                        resolveParameter : function (){  //function that gets invoke before it goes to the specific page
                            return "Winner";
                        }
                    }
                    
                })
                .otherwise('people')
}])