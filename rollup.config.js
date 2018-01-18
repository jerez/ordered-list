import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import flow from 'rollup-plugin-flow';
import pkg from './package.json';

export default
{
	input: 'src/index.js',
	output: [
		// CommonJS (for Node) and ES module (for bundlers) build.
		{name: 'ordered-list', file: pkg.main, format: 'cjs'},
		{name: 'ordered-list', file: pkg.module, format: 'es'},
		// browser-friendly UMD build
		{name: 'ordered-list', file: pkg.browser, format: 'umd'}
	],
	plugins: [
		resolve({jsnext: true}), // so Rollup can find dependencies
		commonjs({include: 'node_modules/**'}), // so Rollup can convert dependencies to an ES module
		flow(), // strip flowtype annotations
		babel({exclude: 'node_modules/**'}), // understand ES6 syntax
	],
};
