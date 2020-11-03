import {ExcelComponent} from '@core/ExcelComponent'

export class Header extends ExcelComponent {
	static className = ['excel__header', 'header']

	constructor($root, options) {
		super($root, {
			name: 'Header',
			...options
		})
	}
	toHTML() {
		return `
			<input class="header__input" type="text" value="Новая таблица">

			<div class="header__functional">
				<button class="header__button button button--delete">
					<span class="material-icons">delete</span>
				</button>

				<button class="header__button button button--close">
					<span class="material-icons">exit_to_app</span>
				</button>
			</div>
		`
	}
}