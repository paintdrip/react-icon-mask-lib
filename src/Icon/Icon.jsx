import './Icon.css'

const Icon = ({ children, className = '', color, size, name, ...props }) => {
	const style = {}

	if (color) {
		style.backgroundColor = color
	}

	if (size) {
		style.width = typeof size === 'number' ? `${size}px` : size
		style.height = typeof size === 'number' ? `${size}px` : size
		style.flex = `0 0 ${typeof size === 'number' ? `${size}px` : size}`
	}

	if (name) {
		style.maskImage = `url(/icons/${name}.svg)`
		style.webkitMaskImage = `url(/icons/${name}.svg)`
		style.maskRepeat = 'no-repeat'
		style.maskSize = 'contain'
		style.maskPosition = 'center'
		style.backgroundColor = color || 'currentColor'
	}

	return (
		<i className={`icon ${className}`} style={style} {...props}>
			{!name && children}
		</i>
	)
}

export default Icon
