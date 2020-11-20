
export function createHeader(title) {
	return `
		<input class="header__input" type="text" value="${title}"">

		<div class="header__functional">
			<button data-type="delete" class="header__button button button--delete">
				<span data-type="delete" class="material-icons">delete</span>
			</button>

			<button data-type="exit" class="header__button button button--close">
				<span data-type="exit" class="material-icons">exit_to_app</span>
			</button>
		</div>
	`
}