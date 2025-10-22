export const tsRules = {
    // typescript-eslint strongly recommend that you do not use the no-undef lint rule on TypeScript projects.
    // see: https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
    'no-undef': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-empty-object-type': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': [
        'error',
        {
            vars: 'all',
            args: 'all',
            varsIgnorePattern: '^_',
            argsIgnorePattern: '^_'
        }
    ]
};
export const jsRules = {
    'no-useless-constructor': 'off',
    'consistent-return': 'off',
    camelcase: 'off',
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'object-curly-spacing': [1, 'always'],
    'comma-dangle': ['error', 'never'],
    'quote-props': ['error', 'as-needed']
};
export const svelteRules = {
// Add Svelte rules here
};
