import {ExcelStateComponent} from '@core/ExcelStateComponent'
import {createHeader} from './header.template'
import {changeTitle} from '@/redux/actions'
import {defaultTitle} from '@/constants'
import {debounce} from '@/core/utils'
import {$} from '@core/dom'

export class Header extends ExcelStateComponent {
	static className = ['excel__header', 'header']

	constructor($root, options) {
		super($root, {
			name: 'Header',
			listeners: ['input'],
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
}