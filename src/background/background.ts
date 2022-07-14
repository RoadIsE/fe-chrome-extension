/* global chrome*/

/**
 * 测试content发送消息到background
 */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	console.log('content-request', request)
	console.log('content-sender', sender)
	console.log('content-sendResponse', sendResponse)
})

/**
 * 测试从background发消息到content
 * background比content要先初始化，因此不能直接发送消息，需要通过设置事件监听，由某个事件来触发
 * 使用chrome.runtime.sendMessage 会报错
 */
chrome.tabs.onMoved.addListener(() => {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage((tabs[0] as { id: number; [key: string]: any }).id, {
			message: 'from background'
		})
	})
})
