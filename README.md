# 🎭 react-icon-mask-lib

Легковесная и расширяемая React-библиотека для отображения SVG-иконок через CSS-маски. Поддерживает кастомные иконки, управление цветом, размером и стилями.

![npm](https://img.shields.io/npm/v/react-icon-mask-lib)  
![license](https://img.shields.io/npm/l/react-icon-mask-lib)  
![bundle size](https://img.shields.io/bundlephobia/minzip/react-icon-mask-lib)

---

## 🚀 Установка

```bash
npm install react-icon-mask-lib
```

## 💻 Пример использования

```javascript
import React from 'react'
import { Icon } from 'react-icon-mask-lib'

// Ваш svg-файл при загрузке через children
import { ReactComponent as CheckIcon } from './icons/check.svg'

const App = () => {
	return (
		<div>
			// Иконка с именем из public/icons
			<Icon name='arrow-right' size={32} color='#2593F2' />
			// Иконка через children
			<Icon size={32} color='#4caf50'>
				<CheckIcon />
			</Icon>
			// Иконка с кастомным классом
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
