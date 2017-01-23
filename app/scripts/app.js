'use strict';
angular.module('invitationsApp', ['ui.router','ngResource','ngDialog', 'lbServices'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                        controller  : 'HeaderController'
                    },
                    'content': {
                        templateUrl : 'views/home.html'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                }
            })
            // route for the aboutus page
            .state('app.aboutus', {
                url:'aboutus',
                views: {
                    'content@': {
                        templateUrl : 'views/aboutus.html'
                    }
                }
            })
            // route for the contactus page
            .state('app.contactus', {
                url:'contactus',
                views: {
                    'content@': {
                        templateUrl : 'views/contactus.html',
                        controller  : 'ContactController'
                    }
                }
            })
            // route for the customers page
            .state('app.customers', {
                url: 'Customers/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/customers.html',
                        controller  : 'CustomersController'
                    }
                }
            })
            // route for the hosts page
            .state('app.hosts', {
                url: 'Customers/:id/hosts',
                views: {
                    'content@': {
                        templateUrl : 'views/hosts.html',
                        controller  : 'HostsController'
                   }
                }
            })
            // route for the events page
            .state('app.events', {
                url: 'Hosts/:id/events',
                views: {
                    'content@': {
                        templateUrl : 'views/events.html',
                        controller  : 'EventsController'
                   }
                }
            })
            // route for the guests page
            .state('app.guests', {
                url: 'Events/:id/guests',
                views: {
                    'content@': {
                        templateUrl : 'views/guests.html',
                        controller  : 'GuestsController'
                   }
                }
            });
        $urlRouterProvider.otherwise('/');
    })
;
