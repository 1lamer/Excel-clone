import {$} from '@core/dom'

export class Excel {
	constructor(selector, options) {
		this.$el = $(selector)
		// this.$el = document.querySelector(selector)
		this.components = options.components || []
	}

	getRoot() {
		const $root = $.create('div', 'excel')

		this.components = this.components.map(Component => {
			const $el = $.create('section', Component.className)

			const component = new Component($el)
			//DEBUG
			// if (component.name) {
			// 	window['c' + component.name] = component
			// }

			//Задаём внутренний html элементу $el с классом className
			
			$el.html(component.toHTML())
			$root.append($el)
			return component
		})

		return $root
	}

	render() {
		 this.$el.append(this.getRoot())

		 this.components.forEach(component => component.init())
		 // this.components.forEach(component => component.remove())
	}
}