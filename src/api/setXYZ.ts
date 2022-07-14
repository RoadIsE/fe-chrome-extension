import md5 from 'blueimp-md5'
import { sampleSize } from 'lodash-es'

const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

interface Data {
	nonce?: string
	xyz?: string
	[key: string]: any
}

/**
 * 添加xyz参数
 * @param {string} url 请求地址
 * @param {object} data 请求数据
 */
export default function setXYZ(url: string, data: any) {
	let code = ''

	if (url.indexOf('http://') == 0) {
		code += url.slice(url.indexOf('/', 7)) + '?AppKey=joker'
	} else if (url.indexOf('https://') == 0) {
		code += url.slice(url.indexOf('/', 8)) + '?AppKey=joker'
	} else {
		code = url + '?AppKey=joker'
	}

	const param: Data = {}
	Object.keys(data)
		.sort()
		.forEach(key => {
			const value = data[key] === null || typeof data[key] === 'undefined' ? '' : data[key]
			param[key] = value
			code += `&${key}=${value}`
		})

	// 随机取数大小为9的数组转为字符串
	const nonce = sampleSize(arr, 9).join('')
	code += `&nonce=${nonce}`

	param.nonce = nonce
	param.xyz = md5(code)
	return param
}
