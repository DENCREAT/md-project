module.exports = {
	root: true,
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		sourceType: 'module'
	},
	globals: {
		axios: true,
		APP: true,
		dataLayer: true
	},
	env: {
		browser: true,
		jquery: true,
		node: true
	},
	// https://github.com/standard/standard/blob/master/docs/RULES-en.md
	// ,'plugin:vue/base'
	extends: ['plugin:vue/essential', 'plugin:vue/strongly-recommended', 'plugin:vue/recommended'],
	// required to lint *.vue files
	plugins: ['simple-import-sort'],

	// add your custom rules here
	rules: {
		// GLOBAL COMPANY LINTER RULES
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // This rule disallows debugger statements
		'arrow-parens': 0, // This rule enforces parentheses around arrow function parameters regardless of arity.
		'indent': ['warn', 'tab', { SwitchCase: 1 }], // This rule enforces a consistent indentation style
		'space-before-function-paren': ['error', 'never'], // This rule aims to enforce consistent spacing before function parentheses
		'no-new': 0,
		'semi': ['error', 'always'], // This rule enforces consistent use of semicolons.
		'curly': ['error', 'multi-or-nest'],
		'brace-style': ['error', 'stroustrup'], // This rule enforces consistent brace style for blocks.
		'object-curly-spacing': ['error', 'always'], // This rule enforces consistent spacing inside braces of object literals
		'no-tabs': 0,
		'prefer-const': 0,
		'comma-dangle': 0, // This rule enforces consistent use of trailing commas
		'no-async-promise-executor': 0,
		'quote-props': ['error', 'consistent-as-needed'],
		'quotes': ['error', 'single', { allowTemplateLiterals: true }],
		// LOCAL LINTER RULES
		'simple-import-sort/imports': 'error',
		// VUE SPECIFIC LINTER RULES
		'vue/order-in-components': ['error', {
			order: [
				'el',
				'name',
				'key',
				'parent',
				'functional',
				['delimiters', 'comments'],
				'extends',
				'mixins',
				['provide', 'inject'],
				'ROUTER_GUARDS',
				'layout',
				'middleware',
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
				'computed',
				'watchQuery',
				'LIFECYCLE_HOOKS',
				'methods',
				'validate',
				'watch',
				['components', 'directives', 'filters'],
				['template', 'render'],
				'renderError'
			]
		}],
		'vue/max-attributes-per-line': ['error', {
			singleline: 3,
			multiline: {
				max: 1,
				allowFirstLine: false
			}
		}],
		'vue/html-indent': ['error', 'tab'],
		'vue/component-name-in-template-casing': ['error', 'PascalCase', {
			registeredComponentsOnly: true,
			ignores: []
		}],
		'vue/match-component-file-name': ['error', {
			extensions: ['vue'],
			shouldMatchCase: false
		}],
		'vue/no-unsupported-features': ['error', {
			version: '^2.6.11',
			ignores: []
		}],
		'vue/no-unused-properties': ['error', {
			groups: ['props', 'data', 'computed', 'setup']
		}],
		'vue/html-closing-bracket-newline': ['error', {
			singleline: 'never',
			multiline: 'never'
		}],
		'vue/require-name-property': 2,
		'vue/no-v-html': 0,
		'vue/attribute-hyphenation': 0,
	},
};
