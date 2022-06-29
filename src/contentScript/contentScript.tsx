/* global chrome*/
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './contentScript.less'

const handleStorage = () => {
	const setting = { isClick: true }
	chrome.storage.local.set(setting, () => {
		console.log('storage', setting)
	})
}

const initStorage = () => {
	chrome.storage.local.get(['inputValue'], result => {
		console.log('init ', result.inputValue)
	})
}

const sendMessageToBackground = () => {
	chrome.runtime.sendMessage({ payload: 'hello from content' }, () => console.log(2 + 2))
}

const onMessageFromBackground = () => {
	chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
		console.log('background-request', request)
		console.log('background-sender', sender)
		console.log('background-sendResponse', sendResponse)
	})
}
const Content: React.FC = () => {
	useEffect(() => {
		initStorage()
		sendMessageToBackground()
	}, [])

	return (
		<div className="crx-content">
			<div className="rc-crx-floating-ball rc-w-16 rc-h-16" onClick={handleStorage}>
				点击
			</div>
		</div>
	)
}

onMessageFromBackground()
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   if (request.cmd === "test") {
//     alert(request.value);
//     sendResponse("收到了popup的消息");
//   }
// });

const app = document.createElement('div')
app.id = 'crx-container'
document.body.appendChild(app)
ReactDOM.createRoot(document.getElementById('crx-container') as HTMLElement).render(<Content />)
