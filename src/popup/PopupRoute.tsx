import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Tool from './pages/Tool'
import Manage from './pages/Manage'
import Setting from './pages/Setting'
import Login from './pages/Login'
import App from './App'

const PopupRoute: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<App />}>
				<Route index element={<Tool />} />
				<Route path="tool" element={<Tool />} />
				<Route path="manage" element={<Manage />} />
				<Route path="setting" element={<Setting />} />
			</Route>
			<Route path="/login" element={<Login />} />
			<Route path="*" element={<Navigate to="/login" />} />
		</Routes>
	)
}

export default PopupRoute
