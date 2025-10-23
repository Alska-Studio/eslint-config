import type { RulesConfig } from '@eslint/core';

export const tsRules: Partial<RulesConfig> = {
  // typescript-eslint strongly recommend that you do not use the no-undef lint rule on TypeScript projects.
  // see: https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
  'no-undef': 'off',
  'no-unused-vars': 'off',
  '@typescript-eslint/no-empty-interface': 'warn',
  '@typescript-eslint/no-empty-object-type': 'warn',
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/no-unused-vars': [
    'warn',
    {
      vars: 'all',
      args: 'all',
      caughtErrors: 'all',
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
      ignoreRestSiblings: true
    }
  ]
};


export const jsRules: Partial<RulesConfig> = {
  'no-useless-constructor': 'off',
  'consistent-return': 'off',
  camelcase: 'off',
  semi: ['error', 'always'],
  quotes: ['error', 'single'],
  'object-curly-spacing': [1, 'always'],
  'comma-dangle': ['error', 'never'],
  'quote-props': ['error', 'as-needed']
};


export const svelteRules: Partial<RulesConfig> = {
  'svelte/no-at-html-tags': 'off',
  'svelte/no-navigation-without-resolve': 'off',
  'svelte/no-unused-props': [
    'warn', {
      ignorePropertyPatterns: ['/^_/']
    }
  ]
};
