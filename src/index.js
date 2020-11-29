
import './scss/index.scss'
import {Router} from '@core/routes/Router'
import {DashboardPage} from '@/pages/dashboardPage/DashboardPage'
import {ExcelPage} from '@/pages/excelPage/ExcelPage'

new Router('#app', {
	dashboard: DashboardPage,
	excel: ExcelPage
})
