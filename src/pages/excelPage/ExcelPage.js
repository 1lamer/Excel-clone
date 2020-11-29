import {Page} from '@core/page/Page'
import {Excel} from '@/components/excel/Excel'
import {Header} from '@/components/header/Header'
import {Toolbar} from '@/components/toolbar/Toolbar'
import {Formula} from '@/components/formula/Formula'
import {Table} from '@/components/table/Table'
import {createStore} from '@core/createStore'
import {rootReducer} from '@/redux/rootReducer'
import {storage} from '@/core/utils'
import {normalizeInitialState} from '@/redux/initialState'
import {StateProcessor} from '@core/page/StateProcessor'
import {LocalStorageClient} from '@/pages/shared/LocalStorageClient'


export class ExcelPage extends Page {
	constructor($root, param) {
		super($root, param)

		this.storeSub = null
		this.processor = new StateProcessor(
			/*
				Передаём клиент (localStorage или сервер) для сохранения
				и получения state
			*/
			new LocalStorageClient(this.params)
		)
	}

	async getRoot() {
		const state = await this.processor.get()
		const initialState = normalizeInitialState(state)
		const store = createStore(rootReducer, initialState)

		this.storeSub = store.subscribe(this.processor.listen)

		this.excel = new Excel({
			components: [Header, Toolbar, Formula, Table],
			store
		})

		return this.excel.getRoot()
	}

	afterRender() {
		this.excel.init()
	}

	destroy() {
		this.excel.destroy()
		this.storeSub.unsubscribe()
	}
}