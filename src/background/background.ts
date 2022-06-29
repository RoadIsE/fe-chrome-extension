/* global chrome*/
chrome.runtime.onInstalled.addListener(function () {
	// chrome.action.disable();
	// chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
	//   let rule = {
	//     conditions: [
	//       new chrome.declarativeContent.PageStateMatcher({
	//         pageUrl: {
	//           // 适配域名为下列的网页
	//           hostEquals: "test.main.newrank.cn",
	//         },
	//       }),
	//     ],
	//     actions: [
	//       // ShowPageAction()已被废弃，这里做兼容
	//       chrome.declarativeContent.ShowAction
	//         ? new chrome.declarativeContent.ShowAction()
	//         : new chrome.declarativeContent.ShowPageAction(),
	//     ],
	//   };
	//   // 整合规则并执行
	//   const rules = [rule];
	//   chrome.declarativeContent.onPageChanged.addRules(rules);
	// });
})

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
