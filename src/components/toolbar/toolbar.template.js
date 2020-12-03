import {rgb2hex} from '@/components/toolbar/toolbar.functions'

function toButton(button) {
	const meta = `
	data-type="button"
	data-value='${JSON.stringify(button.value)}''
	`
	return `
		<button 
			class="toolbar__button button ${button.active ? 'active' : ''}"
			${meta}
		>
			<span 
				class="material-icons"
				style="user-select: none"
				${meta}
			>
				${button.icon}
			</span>
		</button>
	`
}

function createToolbarPannel(state) {
	const buttons = [
		{
			icon: 'format_align_left',
			active: state['textAlign'] === 'left',
			value: {textAlign: 'left'}
		},
		{
			icon: 'format_align_center',
			active: state['textAlign'] === 'center',
			value: {textAlign: 'center'}
		},
		{
			icon: 'format_align_right',
			active: state['textAlign'] === 'right',
			value: {textAlign: 'right'}
		},
		{
			icon: 'format_bold',
			active: state['fontWeight'] === 'bold',
			value: {fontWeight: state['fontWeight'] === 'bold' ? 'normal' : 'bold'}
		},
		{
			icon: 'format_italic',
			active: state['fontStyle'] === 'italic',
			value: {fontStyle: state['fontStyle'] === 'italic' ? 'normal' : 'italic'}
		},
		{
			icon: 'format_underline',
			active: state['textDecoration'] === 'underline',
			value: {textDecoration: state['textDecoration'] === 'underline' ? 'none' : 'underline'}
		},
	]
	return buttons.map(toButton).join('')
}


export function createToolbar(state) {
	const color = rgb2hex(state['color'])
	return `
		${createToolbarPannel(state)}

		<label data-type="color" for="color">
			<span class="visually-hidden">Select color</span>
			<input data-type="color" id="color" type="color" value="${color}">
		</label>
	`
}