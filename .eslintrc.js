module.exports = {
	parser: "babel-eslint",
	env: {
		browser: true,
		es6: true
	},
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly"
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: "module"
	},
	plugins: ["react"],
	rules: {
		"no-var": ["error"],
		"no-unused-vars": ["warn", { ignoreRestSiblings: true }],
		indent: ["warn", "tab", { SwitchCase: 1 }],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double", { avoidEscape: true }],
		"no-multiple-empty-lines": "warn",
		"no-multi-spaces": "warn",
		"react/jsx-uses-vars": "error",
		"react/jsx-uses-react": "error",
		"linebreak-style": 0
	}
};
