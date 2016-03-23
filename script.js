var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);

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

app.controller('mainController', function($scope) {
    alert("got here");
    $scope.pageClass = 'page-home';
});

app.controller('aboutController', function($scope) {
    $scope.pageClass = 'page-about';
});

app.controller('contactController', function($scope) {
    $scope.pageClass = 'page-contact';
});

