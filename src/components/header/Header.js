import {ExcelStateComponent} from '@core/ExcelStateComponent'
import {createHeader} from './header.template'
import {changeTitle} from '@/redux/actions'
import {defaultTitle} from '@/constants'
import {debounce} from '@/core/utils'
import {$} from '@core/dom'
import {ActiveRoute} from '@core/routes/ActiveRoute'

export class Header extends ExcelStateComponent {
	static className = ['excel__header', 'header']

	constructor($root, options) {
		super($root, {
			name: 'Header',
			listeners: ['input', 'click'],
			subscribe: ['title'],
			...options
		})
	}

	prepare() {
		this.onInput = debounce(this.onInput, 300)
	}

	toHTML() {
		const title = this.store.getState().title || defaultTitle
		return createHeader(title)
	}

	onInput(event) {
		const $target = $(event.target)
		this.$dispatch(changeTitle($target.text()))
	}

	onClick(event) {
		const $target = $(event.target)

		if ($target.data.type === 'delete') {
			const decision = confirm('Do you really wanna delete this table?')
			if (decision) {
				localStorage.removeItem(`excel:${ActiveRoute.param}`)
				ActiveRoute.navigate('')
			}
		} else if ($target.data.type === 'exit') {
			ActiveRoute.navigate('')
		}
	}
}