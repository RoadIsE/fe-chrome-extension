/* global chrome*/
import React, { useState } from 'react'

const Manage: React.FC = () => {
	// 输入框
	const [value, setValue] = useState('')

	/**
	 * 点击发送消息
	 */
	const handleSubmitMessage = () => {
		sendMessageByTabs({ cmd: 'message from popup', value: value }, function (response: any) {
			console.log('来自content的回复：', response)
		})
	}

	/**
	 * tabs 方式发消息
	 * @param message 消息体
	 * @param callback 发送成功后的回调函数
	 */
	const sendMessageByTabs = (message: object, callback: any) => {
		chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
			chrome.tabs.sendMessage(
				(tabs[0] as { id: number; [key: string]: any }).id,
				message,
				function (response) {
					if (callback) callback(response)
				}
			)
		})
	}

	/**
	 * storage 通信传消息
	 */
	const sendMessageByStorage = () => {
		const setting = { inputValue: value }
		chrome.storage.local.set(setting, () => {
			console.log('storage', setting)
		})
	}

	return (
		<div className="rc-p-2">
			<button
				className="rc-bg-green-500 rc-text-white rc-rounded rc-py-2 rc-px-6 rc-mb-3 rc-mt-3"
				onClick={() => chrome.runtime.openOptionsPage()}
			>
				打开options
			</button>

			<div>
				<p>向content发送消息</p>
				<section>
					<input
						type="text"
						placeholder="请输入内容"
						className="rc-border-1 rc-border-gray-500 rc-leading-loose <sm:focus:rc-border-green-500 rc-outline-none rc-rounded rc-px-1"
						onChange={e => setValue(e.target.value)}
					/>
					<button
						className="rc-bg-green-500 rc-text-white rc-rounded rc-py-1 rc-px-6 rc-ml-1"
						onClick={handleSubmitMessage}
					>
						发送
					</button>
				</section>
			</div>
		</div>
	)
}

export default Manage
