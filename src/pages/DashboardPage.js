import {Page} from '@core/Page'
import {$} from '@core/dom'
import {toHTML, getAllRecords, createRecordsTable} from '@/pages/dashboard.functions'

export class DashboardPage extends Page {
	getRoot() {
		const now = Date.now().toString()
		return $.create('main', 'dashboard').html(`
			<header class="dashboard__db-header db-header">
				<h1 class="db-header__title">Excel control panel</h1>
			</header>

			<section class="dashboard__new-tb new-tb">

				<div class="wrapper">
					<a href="#excel/${now}" class="new-tb__create">
						Новая <br> Таблица
					</a>
				</div>
				
			</section>

			<section class="dashboard__earlier-tb earlier-tb wrapper">
				${createRecordsTable()}
			</section>
		`)
	}

	afterRender() {
		// this.excel.init()
	}

	destroy() {
		// this.excel.destroy()
	}
}