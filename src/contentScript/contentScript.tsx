/* global chrome*/
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './contentScript.less'

/**
 * 获取popup中设置的storage
 */
const initStorage = () => {
	chrome.storage.local.get(['inputValue'], result => {
		console.log('init ', result.inputValue)
	})
}

/**
 * 发送消息到background
 */
const sendMessageToBackground = () => {
	chrome.runtime.sendMessage({ payload: 'hello from content' }, () =>
		console.log('content to background 发送消息成功！')
	)
}

const Content: React.FC = () => {
	const [value, setValue] = useState('')

	useEffect(() => {
		onMessage()
	}, [])

	/**
	 * 接收消息
	 */
	const onMessage = () => {
		chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
			console.log('request', request)
			if (request.cmd === 'message from popup') setValue(request.value)
		})
	}

	return (
		<div className="crx-content">
			<div className="crx-input">
				<label>来自popup的消息</label>
				<input
					type="text"
					placeholder="popup"
					value={value}
					onChange={e => setValue(e.target.value)}
				/>
			</div>
		</div>
	)
}

const app = document.createElement('div')
app.id = 'crx-container'
document.body.appendChild(app)
ReactDOM.createRoot(document.getElementById('crx-container') as HTMLElement).render(<Content />)
