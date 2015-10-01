var app = angular.module("GiveBackApp", ['ngRoute', 'register.module', 'ngAria', 'ngMessages', 'ngAnimate']);
var komp = new Komponent();

app.config(['$routeProvider', function($routeProvider) {
  
  console.log("GiveBackApp");
  
  $routeProvider.
    when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    }).
    when('/form', {
      templateUrl: 'partials/form.html',
      controller: 'HomeController'
    }).
    when('/map', {
      templateUrl: 'partials/map.html',
      controller: 'HomeController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);//end route provider

app.controller("FormController", function($scope, $http, $location ){
  $scope.errorMessages = [{
        type: 'coast',
        text: 'You are too far from the coast'
      }];
});//end details controller

app.controller("MapController", function($scope, $http, $location ){
 
});//end details controller

app.controller("HomeController", function($scope,  $http, $location ){
  console.log("UnitListController");

  var unitArray = [];
  //
  // cooper s - for when we need data
  //$http.get("http://khalidmills.com/hr/units.json").then(function(r){
  //$http.get("http://harlemreservations-campaigner.rhcloud.com/unit").then(function(r){
  //$http.get("http://127.0.0.1:8080/unit/").then(function(r){
  //});//end http get 

    $scope.go = function ( path ) {
        console.log("click for new view..." + path );
        $location.path( path );
      };

});//end list controller
