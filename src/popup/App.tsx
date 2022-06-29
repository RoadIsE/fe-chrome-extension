import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

// import "@/content";

const activeLink = 'rc-text-green-500 rc-text-xl rc-no-underline rc-m-auto'
const normalLink = 'rc-text-gray-500 rc-text-xl rc-no-underline rc-m-auto'

const App: React.FC = () => {
	return (
		<div>
			<nav className="rc-flex rc-py-2 rc-border-b rc-border-gray-500">
				<NavLink
					className={({ isActive }) => {
						return isActive ? activeLink : normalLink
					}}
					to="tool"
				>
					工具
				</NavLink>
				<NavLink
					className={({ isActive }) => {
						return isActive ? activeLink : normalLink
					}}
					to="manage"
				>
					管理
				</NavLink>
				<NavLink
					className={({ isActive }) => {
						return isActive ? activeLink : normalLink
					}}
					to="setting"
				>
					设置
				</NavLink>
			</nav>

			<main className="rc-w-full">
				<Outlet />
			</main>
		</div>
	)
}

export default App
