class Meta {
	constructor() {
        
    }
    toJSON() {
        return {
          id: this.id,
          name: this.name
      	};
    }
};

export Meta;