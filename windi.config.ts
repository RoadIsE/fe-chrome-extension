import { defineConfig } from 'windicss/helpers'

export default defineConfig({
	extract: {
		include: ['**/*.{tsx,jsx,html}'],
		exclude: ['node_modules', '.git', '.next/**/*']
	},
	preflight: false,
	prefix: 'rc-',
	prefixer: true,
	important: true
})
