export class Request {

	constructor(url, options){
		this.url = url;
		this.options = options;
		this.json = {};
	}

	done = f => {
		f(this.json);
	}

}