var app = angular.module("myApp", ['ngAnimate', 'ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "Test_Angular_JS.html"
    })
    .when("/", {
        templateUrl: "willSmith.html",
        controller: "willSmithController"
    })
    .when("/theRock", {
        templateUrl: "theRock.html",
        controller: "theRockController"
    });
});

app.controller("willSmithController", function($scope) {
    $scope.msg="Hello, Will!";
});

app.controller("theRockController", function($scope) {
    $scope.msg="Hello, Dwain!";
});

app.controller("myController", function($scope, $http) {
// Creating a person objects array
$scope.persons = [{name:"Tom", email:"ksd@sdf.com", age:19, country:"Denmark"}, 
                {name:"Ben", email:"sdg@sdsdgf.com", age:29, country:"Spain"},
                {name:"Sam", email:"gbg@gbg.com", age:43, country:"Italy"},
                {name:"Jason", email:"kswerd@dfgh.com", age:25, country:"Bulgaria"},
                {name:"David", email:"kersd@sfghdf.com", age:35, country:"Unated States of America"},
                {name:"Hulk", email:"wer@wer.com", age:50, country:"Portugal"}];

// Creating a cities names array
$scope.cities = ["London", "Madrid", "Paris", "Los Angeles", 
                "Detroit", "Haga", "Rome", "Sofia", "Stutgart", "Atina"];

// Array of car brands names strings for dropdown menu
$scope.carBrands = ["Tesla", "Mazda", "Ford", "Audi", "Opel", "Toyota", "BMW", "Mercedes", "Mitsubishi", "Renault", "Citroen", "Peugeut",
                    "Lexus", "Dachia", "Seat", "Range Rover", "Aston Martin", "Volkswagen", "Porshe", "Mini"];

// Array of car objects for a dropdown menu
$scope.cars = {Ford: {model:"F 150", year:"2019", color:"white"},
               Tesla: {model:"Model S Plaid", year:"2021", color:"black"},
               Audi: {model:"A6", year:"2020", color:"gray"},
               Mazda: {model:"3", year:"2019", color:"red"}};

// Function for ordering by a word
$scope.orderBy = function(word) {
                    $scope.order = word;
                 }

// Function for connecting with server using http protocol
$http.get("http://localhost:8080/dataInfo")
    .then(function(response) {
        $scope.serverResponse = response.data;
    });

$scope.showFullName = function() {
    document.getElementById("fullName").innerHTML=$scope.firstName + " " + $scope.lastName;
}

$scope.resetInputBoxes = function() {
    document.getElementById("fullName").innerHTML="";
    $scope.firstName = "";
    $scope.lastName = "";
}

});