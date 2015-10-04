var app = angular.module("GiveBackApp", ['ngRoute', 'register.module', 'ngAria', 'ngMessages', 'ngAnimate']);
var komp = new Komponent();

var komp_div = $("#map");


app.config(['$routeProvider', function($routeProvider) {
  
  console.log("GiveBackApp");
  
  $routeProvider.
    when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    }).
    when('/form', {
      templateUrl: 'partials/form.html',
      controller: 'FormController'
    }).
    when('/map', {
      templateUrl: 'partials/map.html',
      controller: 'MapController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);//end route provider


//cooper s - here's where we put our controllers
app.controller("FormController", function($scope, $http, $location ){
  $scope.errorMessages = [{
        type: 'test',
        text: 'You are too far from the coast'
      }];

   $scope.go = function ( path ) {
        console.log("click for new view..." + path );
        $location.path( path );
      };

});//end details controller

app.controller("MapController", function($scope, $http, $location ){

komp.insertKomponent(komp_div, "test", function(){
      console.log("picked - create our komponent ");
     });

   $scope.go = function ( path ) {
        console.log("click for new view..." + path );
        $location.path( path );
      };

});//end details controller

app.controller("HomeController", function($scope,  $http, $location ){
  console.log("HomeController");

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
