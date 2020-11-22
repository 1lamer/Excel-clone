import {storage} from '@/core/utils'

function storageName(param) {
	return 'excel:' + param
}

export class LocalStorageClient {
	constructor(name) {
		this.name = storageName(name)
	}

	save(state) {
		storage(this.name, state)
		return Promise.resolve()
	}

	get() {
		return Promise.resolve(storage(this.name))
		
		/*Имитация полуения данных с сервера*/
		// return new Promise(resolve => {
		// 	const state = storage(this.name)

		// 	setTimeout(() => {
		// 		resolve(state)
		// 	}, 1500)
		// })
	}
}