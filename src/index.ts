import { resolve } from 'node:path';

import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import { includeIgnoreFile } from '@eslint/compat';

import { tsRules, jsRules, svelteRules } from './rules';

const gitignorePath = resolve('./.gitignore');

export default defineConfig([
  includeIgnoreFile(gitignorePath),
  js.configs.recommended,
  ts.configs.recommended,
  svelte.configs.recommended,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }
    }
  },
  // --- Svelte files ---
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.svelte',
      '**/*.svelte.ts',
      '**/*.svelte.js'
    ],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: resolve('.'),
        extraFileExtensions: ['.svelte'],
        parser: ts.parser
      }
    },
    rules: { ...jsRules, ...tsRules, ...svelteRules }
  },
  // --- TypeScript files ---
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts'
    ],
    languageOptions: {
      parser: ts.parser,
      parserOptions: {
        tsconfigRootDir: resolve('.')
      }
    },
    rules: { ...jsRules, ...tsRules }
  },
  // --- JavaScript files ---
  {
    files: [
      '**/*.js',
      '**/*.mjs',
      '**/*.cjs',
      '**/*.ts',
      '!eslint.config.js',
      '!eslint.config.ts'
    ],
    ignores: ['**/*.svelte.*'],
    rules: jsRules
  }
]);
