import React from 'react'
import { useNavigate } from 'react-router-dom'

const Setting: React.FC = () => {
	const navigate = useNavigate()
	const logout = () => {
		navigate('/login')
	}
	return (
		<div className="rc-flex rc-flex-col rc-justify-between rc-w-full rc-h-300px">
			<div className="rc-flex-1">
				<h3>用户</h3>
			</div>
			<footer className="rc-border-t-1 rc-flex rc-justify-center rc-items-center rc-mt-auto">
				<img src="" alt="" />
				<button className="rc-bg-green-500 rc-text-white rc-rounded rc-py-1" onClick={logout}>
					退出登录
				</button>
			</footer>
		</div>
	)
}

export default Setting
