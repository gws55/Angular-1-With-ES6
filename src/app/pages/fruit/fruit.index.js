import FruitController from './fruit.controller';
import FruitService from './fruit.service';

angular.module('App')
	.service('fruitService', FruitService)
	.controller('FruitController', FruitController);