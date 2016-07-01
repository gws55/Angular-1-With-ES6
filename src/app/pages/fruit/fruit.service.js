class FruitService 
{
    constructor($resource) {
        this.$resource = $resource;
    }

    getFruitList() {
    	var url = 'http://localhost:8080/api/f/get?api_key=test';

		return this.$resource(url).get().$promise;
    }

    createFruit(newFruit) {
    	var url = 'http://localhost:8080/api/f/insert?api_key=test';
    	url += '&name=' + newFruit.name;

		return this.$resource(url).save().$promise;
    }

    updateFruit(updateFruit) {
    	var url = 'http://localhost:8080/api/f/update?api_key=test';
    	url += '&id=' + updateFruit.id + '&name=' + updateFruit.name;

		return this.$resource(url).save().$promise;
    }

    deleteFruit(deleteFruit) {
    	var url = 'http://localhost:8080/api/f/delete?api_key=test';
    	url += '&id=' + deleteFruit.id;

		return this.$resource(url).save().$promise;
    }
};

export default FruitService;