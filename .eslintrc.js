module.exports = {
	root: true,
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: '2022',
		ecmaFeatures: {
			modules: true,
		},
		sourceType: 'module',
	},
	globals: {
		axios: true,
		APP: true,
		dataLayer: true,
	},
	env: {
		es6: true,
		browser: true,
		node: true,
	},
	extends: [
		'plugin:vue/essential',
		'plugin:vue/recommended',
	],
	plugins: [
		'simple-import-sort',
		'unused-imports',
		'@typescript-eslint',
	],
	rules: {
		'max-len': [
			'error',
			{ code: 135 },
		],
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // This rule disallows debugger statements
		'arrow-parens': 0, // This rule enforces parentheses around arrow function parameters regardless of arity.
		'indent': ['error', 'tab', { SwitchCase: 1 }], // This rule enforces a consistent indentation style
		'space-before-function-paren': ['error', 'never'], // This rule aims to enforce consistent spacing before function parentheses
		'no-new': 0,
		'semi': ['error', 'always'], // This rule enforces consistent use of semicolons.
		'curly': ['error', 'multi-or-nest'],
		'brace-style': ['error', 'stroustrup'], // This rule enforces consistent brace style for blocks.
		'object-curly-spacing': ['error', 'always'], // This rule enforces consistent spacing inside braces of object literals
		'no-tabs': 0,
		'prefer-const': 'error',
		'comma-dangle': ['error', 'always-multiline'],
		'no-async-promise-executor': 'error',
		'quote-props': ['error', 'consistent-as-needed'],
		'quotes': ['error', 'single', { allowTemplateLiterals: true }],
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: '*',
				next: 'return',
			},
			{
				blankLine: 'always',
				prev: ['const', 'let', 'var'],
				next: '*',
			},
			{
				blankLine: 'never',
				prev: ['const', 'let', 'var'],
				next: ['const', 'let', 'var'],
			},
			{
				blankLine: 'always',
				prev: '*',
				next: 'if',
			},
		],
		'simple-import-sort/imports': 'error',
		// VUE SPECIFIC LINTER RULES
		'vue/match-component-file-name': ['error', {
			extensions: ['vue'],
			shouldMatchCase: false,
		}],
		'vue/no-unused-properties': ['error', {
			groups: ['props', 'data', 'setup'],
		}],
		'vue/require-name-property': ['error'],
		'vue/html-closing-bracket-newline': ['error', {
			singleline: 'never',
			multiline: 'never',
		}],
		'vue/html-indent': ['error', 'tab'],
		'vue/require-default-prop': 0,
		'vue/no-v-html': 0,
		'vue/no-v-model-argument': 0,
		'vue/order-in-components': ['error', {
			order: [
				'el',
				'name',
				'key',
				'parent',
				'functional',
				['delimiters', 'comments'],
				['components', 'directives'],
				'mixins',
				'extends',
				['provide', 'inject'],
				'ROUTER_GUARDS',
				'layout',
				'middleware',
				'validate',
				'scrollToTop',
				'transition',
				'loading',
				'inheritAttrs',
				'model',
				['props', 'propsData'],
				'emits',
				'setup',
				'asyncData',
				'data',
				'fetch',
				'head',
				'filters',
				'computed',
				'watch',
				'watchQuery',
				'LIFECYCLE_HOOKS',
				'methods',
				['template', 'render'],
				'renderError',
			],
		}],
		'vue/attributes-order': ['error', {
			order: [
				'DEFINITION',
				'LIST_RENDERING',
				'CONDITIONALS',
				'RENDER_MODIFIERS',
				'GLOBAL',
				['UNIQUE', 'SLOT'],
				'TWO_WAY_BINDING',
				'OTHER_DIRECTIVES',
				'OTHER_ATTR',
				'EVENTS',
				'CONTENT',
			],
			alphabetical: false,
		}],
		'vue/multi-word-component-names': 0,
		'unused-imports/no-unused-imports': 'error',
		// ts rules
		'ts-expect-error': 0,
		'@typescript-eslint/ban-ts-ignore': 0,
		'@typescript-eslint/ban-ts-comment': 0,
		'@typescript-eslint/explicit-module-boundary-types': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/no-unused-vars': 0,
		'@typescript-eslint/no-non-null-assertion': 0,
		'@typescript-eslint/no-empty-function': 0,
		'@typescript-eslint/no-extra-semi': 0,
		'@typescript-eslint/space-infix-ops': ['error', { int32Hint: false }],
	},
};