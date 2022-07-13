import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, NavLink, Outlet, Route, Routes } from 'react-router-dom'
import Options1 from './components/Options1'
import Options2 from './components/Options2'
import '../virtual:windi.css'
import './options.less'

const Options: React.FC = () => {
	return (
		<>
			<h1>这里是options</h1>
			<nav className="rc-flex rc-py-2 rc-justify-between rc-w-150px">
				<NavLink to="options1">OPTIONS1</NavLink>
				<NavLink to="options2">OPTIONS2</NavLink>
			</nav>

			<Routes>
				<Route path="/options1" element={<Options1 />} />
				<Route path="/options2" element={<Options2 />} />
			</Routes>
			<Outlet />
		</>
	)
}

const rootDom = document.createElement('div')
rootDom.id = 'root-options'
document.body.appendChild(rootDom)

const root = ReactDOM.createRoot(document.getElementById('root-options') as HTMLElement)

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Options />
		</BrowserRouter>
	</React.StrictMode>
)
