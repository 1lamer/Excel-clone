export class Page {
	constructor(params) {
		this.params = params
	}

	getRoot() {
		throw new Error('Method "getRoot" should be implemented')
	}

	afterRender() {

	}

	destroy() {

	}
}

// For testing
// module.exports = {Page}