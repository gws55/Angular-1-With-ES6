var angular = require('angular');
var ngRoute = require('angular-route');
var ngResource = require('angular-resource');

angular.module('App', [ngRoute, ngResource]);

// styles
require('./assets/styles/main.css');

// routes
require('./app/route');

// components
require('./app/components/container/container.index');
require('./app/components/navbar/navbar.index');

// pages
require('./app/pages/about/about.index');
require('./app/pages/fruit/fruit.index');
require('./app/pages/home/home.index');
