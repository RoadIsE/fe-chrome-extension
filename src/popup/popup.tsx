import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import PopupRoute from './PopupRoute'
import '../virtual:windi.css'
import './popup.less'

const rootDom = document.createElement('div')
rootDom.id = 'root'
document.body.appendChild(rootDom)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<PopupRoute />
		</BrowserRouter>
	</React.StrictMode>
)
