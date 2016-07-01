import Meta from './meta';

class Fruit extends Meta {
	constructor(json) {
        this.meta = new Meta(json.meta);
        this.data = json.data;
    }
    getMeta() {
        return this.meta;
    }
    getData() {
        return this.data;
    }
};

export Fruit;