/* global chrome*/
import React from 'react'

const linkList = [
	{ linkName: 'React', link: 'https://react.docschina.org/' },
	{ linkName: 'Vue', link: 'https://v3.cn.vuejs.org/' },
	{ linkName: 'Node', link: 'http://nodejs.cn/' },
	{ linkName: '新榜', link: 'https://www.newrank.cn/' }
]
const Tool: React.FC = () => {
	return (
		<div className="rc-w-auto">
			<div className="rc-flex">
				{linkList.map(item => {
					return (
						<span
							key={item.linkName}
							className="rc-flex-1 rc-py-4 rc-text-center <sm:hover:rc-text-green-500 rc-cursor-pointer"
							onClick={() => chrome.tabs.create({ url: item.link })}
						>
							{item.linkName}
						</span>
					)
				})}
			</div>
		</div>
	)
}

export default Tool
