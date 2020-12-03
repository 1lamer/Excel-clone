import {storage} from '@core/utils'
import {$} from '@core/dom'

function toHTML(key) {
	const model = storage(key)
	const id = key.split(':')[1]
	
	return `
		<li class="earlier-tb__record">
		
			<label class="earlier-tb__container">
				<input data-id="${id}" class="visually-hidden" type="checkbox">
				<span class="earlier-tb__check"></span>
			</label>
			
			<a data-id="${id}" class="earlier-tb__link" href="#excel/${id}">
				<span>${model.title}</span>
				<strong>
					${new Date(model.openedDate).toLocaleDateString()}
					|
					${new Date(model.openedDate).toLocaleTimeString()}
				</strong>
			</a>
		</li>
	`
}

function getAllKeys() {
	const keys = []

	for (let i = 0; i < localStorage.length; i++) {
		const key = localStorage.key(i)
		if (!key.includes('excel')) {
			continue
		}
		keys.push(key)
	}
	return keys
}

function createRecordsTable() {
	const keys = getAllKeys()
	keys.sort().reverse()

	if (!keys.length) {
		return `<p>You haven't created any table yet</p>`
	}

	return `
		<div class="earlier-tb__row">
			<button data-type="delete" class="earlier-tb__button button button--delete">
				<span data-type="delete" class="material-icons">delete</span>
			</button>

			<div class="earlier-tb__header">
				<span>Name</span>
				<span>Last opened</span>
			</div>
		</div>

		<ul class="earlier-tb__list">
			${keys.map(key => toHTML(key)).join('')}
		</ul>
	`
}

export function createDashboard($root) {
	const now = Date.now().toString()

	return $root.html(`
		<header class="dashboard__db-header db-header">
			<h1 class="db-header__title">Dashboard</h1>
		</header>

		<section class="dashboard__new-tb new-tb">

			<div class="wrapper">
				<a href="#excel/${now}" class="new-tb__create">
					New <br> Table
				</a>
			</div>
			
		</section>

		<section class="dashboard__earlier-tb earlier-tb wrapper">
			${createRecordsTable()}
		</section>
	`)
}