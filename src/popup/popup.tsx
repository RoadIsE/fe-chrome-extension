import React from 'react'
import ReactDOM from 'react-dom/client'
import '../virtual:windi.css'
import './popup.less'

const rootDom = document.createElement('div')
rootDom.id = 'root'
document.body.appendChild(rootDom)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<React.StrictMode>
		<img src="icon.png" />
	</React.StrictMode>
)
