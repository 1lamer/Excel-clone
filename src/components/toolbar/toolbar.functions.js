export function rgb2hex(rgb) {
    const color = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
    function hex(x) {
        return ('0' + parseInt(x).toString(16)).slice(-2)
    }

    if (color) {
    	return '#' + hex(color[1]) + hex(color[2]) + hex(color[3])
    }
    return rgb
}