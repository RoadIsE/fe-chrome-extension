/* global chrome*/
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
	const navigate = useNavigate()

	const login = () => {
		const setting = { isLogin: true }
		chrome.storage.local.set(setting, () => {
			console.log('用户已登录', setting)
		})

		navigate('/')
	}
	return (
		<div className="rc-flex rc-justify-center rc-items-center rc-flex-col rc-w-full rc-mt-12">
			<p className="rc-text-gray-500 rc-py-1 rc-mb-4">要使用小插件，请先登录哦</p>
			<button className="rc-bg-green-500 rc-text-white rc-rounded rc-py-2 rc-px-8" onClick={login}>
				登录
			</button>
		</div>
	)
}

export default Login
