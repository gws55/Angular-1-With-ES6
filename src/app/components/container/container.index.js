import ContainerDirective from './container.directive';

angular.module('App')
	.directive('container', () => new ContainerDirective());