import {Page} from '@core/page/Page'
import {createDashboard} from '@/pages/dashboardPage/dashboard.template'
import {$} from '@core/dom'

export class DashboardPage extends Page {
	constructor($root) {
		super($root, ['click'])
		this.$root = $root
	}

	getRoot() {
		return createDashboard(this.$root)
	}

	afterRender() {
		this.initDOMListeners()
	}

	destroy() {
		this.removeDOMListeners()
	}

	
	onClick(event) {
		const $target = $(event.target)
		if ($target.data.type === 'delete') {
			const checked = document.querySelectorAll(`input[type="checkbox"]:checked`)
			checked.forEach(node => {
				const id = $(node).data.id
				localStorage.removeItem(`excel:${id}`)
			})
			createDashboard(this.$root)
		} 
	}
}