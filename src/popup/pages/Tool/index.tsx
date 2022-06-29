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
			<ul className="rc-flex">
				{linkList.map(item => {
					return (
						<li
							key={item.linkName}
							className="rc-flex-1 rc-py-4 rc-text-center rc-sm:hover:text-green-500"
						>
							<a href={item.link} target="_blank" rel="noreferrer">
								{item.linkName}
							</a>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Tool
