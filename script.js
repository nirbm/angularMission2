var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'bugatti.html',
        })    
        .when('/bugatti', {
            templateUrl : "bugatti.html",

        })

        .when('/Koenigsegg', {
            templateUrl : "Koenigsegg.html",
        })

        .when('/mc', {
            templateUrl : 'mc.html',
        })

        .when('/fer', {
            templateUrl : 'fer.html',
        })

        .otherwise({redirectTo: 'bugatti.html'});
});


