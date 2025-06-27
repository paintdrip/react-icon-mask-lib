# 🎭 react-icon-mask-lib

A lightweight and extensible React library for displaying SVG icons via CSS masks. 
Allows you to use monochrome icons with customizable color, size, and styles.

![npm](https://img.shields.io/npm/v/react-icon-mask-lib)  
![license](https://img.shields.io/npm/l/react-icon-mask-lib)  
![bundle size](https://img.shields.io/bundlephobia/minzip/react-icon-mask-lib)

## ✨ Features

- 🔹 Support for SVG via CSS `mask-image`
- 🎨 Change color via `background-color`
- 📦 Lightweight and easy integration
- ⚙️ Flexibility — you can use `children` for arbitrary content
- 📱 Support for custom classes, sizes, and styles

---

## 🚀 Installation

```bash
npm install react-icon-mask-lib
```

## 💻 Usage example

```javascript
import React from 'react'
import { Icon } from 'react-icon-mask-lib'

// Your svg file when loaded through children
import { ReactComponent as CheckIcon } from './icons/check.svg'

const App = () => {
	return (
		<div>
			// Icon with a name from public/icons
			<Icon name='arrow-right' size={32} color='#2593F2' />
			// Icon via children
			<Icon size={32} color='#4caf50'>
				<CheckIcon />
			</Icon>
			// Icon with a custom class
			<Icon
				name='user'
				size={40}
				color='white'
				className='bg-gray-800 rounded-full shadow-lg'
			/>
		</div>
	)
}

export default App
```
