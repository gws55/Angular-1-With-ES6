class FruitController 
{
	constructor(fruitService) {
		this.fruitList = [];
		this.updateFruit = {};
		this.fruitService = fruitService;

		loadingToggleOn();
		this.renderTable();
	}

	renderTable() {
		this.fruitService.getFruitList()
			.then((response) => {
				this.fruitList = response.data;
				$('#createModal').modal('hide');
				$('#editModal').modal('hide');
				loadingToggleOff();
			});
	}

	createFruit(newFruit) {
		if (newFruit == null) {
			alert("can't be null");
			return;
		}

		loadingToggleOn();
		this.fruitService.createFruit(newFruit)
			.then((response) => {
				var success = response.meta.success;
				var message = response.meta.message;

				if (success) {
					this.renderTable();
				} else {
					loadingToggleOff();
					alert(message);
				}
			});
	}

	editFruit(updateFruit) {
		if (updateFruit == null) {
			alert("can't be null");
			return;
		}

		loadingToggleOn();
		this.fruitService.updateFruit(updateFruit)
			.then((response) => {
				var success = response.meta.success;
				var message = response.meta.message;

				if (success == true) {
					this.renderTable();
				} else {
					loadingToggleOff();
					alert(message);
				}
			});
	}

	deleteFruit(deleteFruit) {
		if (deleteFruit == null) {
			alert("can't be null");
			return;
		}

		loadingToggleOn();
		this.fruitService.deleteFruit(deleteFruit)
			.then((response) => {
				var success = response.meta.success;
				var message = response.meta.message;

				if (success == true) {
					this.renderTable();
				} else {
					loadingToggleOff();
					alert(message);
				}
			});
	}

	toggleEdit(fruit) {
		if (fruit != null) {
			this.updateFruit = {
				"id": fruit.id, 
				"name": fruit.name
			};
		}
	}

	toggleDelete(fruit) {
		if (fruit != null) {
			this.deleteFruit = {
				"id": fruit.id, 
				"name": fruit.name
			};
		}
	}

	hi() {
		console.log('Andrew was here');
	}

};

export default FruitController;
