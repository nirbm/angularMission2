var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'bugatti.html',
        })    
        .when('/bugatti', {
            templateUrl : "bugatti.html",
           controller: 'aboutController'

        })

        .when('/Koenigsegg', {
            templateUrl : "Koenigsegg.html",
            controller: 'contactController'
        })

        .when('/mc', {
            templateUrl : 'mc.html',
             controller: 'mainController'
        })

        .when('/fer', {
            templateUrl : 'fer.html',
        })

        .otherwise({redirectTo: 'bugatti.html'});
});


