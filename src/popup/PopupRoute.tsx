/* global chrome*/
import React, { useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Tool from './pages/Tool'
import Manage from './pages/Manage'
import Setting from './pages/Setting'
import Login from './pages/Login'
import App from './App'

const PopupRoute: React.FC = () => {
	const navigate = useNavigate()

	// 是否登录
	useEffect(() => {
		chrome.storage.local.get(['isLogin'], result => {
			console.log('isLogin', result.isLogin)
			if (result.isLogin) {
				navigate('/')
			} else {
				navigate('/login')
			}
		})
	}, [])

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
