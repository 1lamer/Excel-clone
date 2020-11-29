import {DomListener} from '@core/DomListener'

export class Page extends DomListener {
	constructor($root, params) {
		super($root, ['click'])
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