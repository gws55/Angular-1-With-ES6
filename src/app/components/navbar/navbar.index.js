import NavbarDirective from './navbar.directive';

angular.module('App')
	.directive('navbar', () => new NavbarDirective());