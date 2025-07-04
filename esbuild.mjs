//@ts-check
import * as esbuild from 'esbuild'

const watch = process.argv.includes('--watch')
const minify = process.argv.includes('--minify')

const success = watch ? 'Watch build succeeded' : 'Build succeeded'

function getTime() {
	const date = new Date()
	return `[${padZeroes(date.getHours())}:${padZeroes(date.getMinutes())}:${padZeroes(date.getSeconds())}}] `
}

function padZeroes(i) {
	return i.toString().padStart(2, '0')
}

const plugins = [
	{
		name: 'watch-plugin',
		setup(build) {
			build.onEnd((result) => {
				if (result.errors.length === 0) {
					console.log(getTime() + success)
				}
			})
		},
	},
]

const ctx = await esbuild.context({
	entryPoints: ['src/front-end/cee-app.tsx', 'src/front-end/dummy-line-plot.ts', 'index.html'],
	outdir: 'out',
	target: 'ES2021',
	format: 'esm',
	outExtension: {
		'.js': '.mjs',
	},
	loader: { '.ts': 'ts', '.html': 'copy'},
	sourcemap: !minify,
	platform: 'node',
	minify,
	plugins,
})

if (watch) {
	await ctx.watch()
} else {
	await ctx.rebuild()
	ctx.dispose()
}