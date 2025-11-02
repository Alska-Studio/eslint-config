import { resolve } from 'node:path';
import fs from 'node:fs';

import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import { includeIgnoreFile } from '@eslint/compat';

import { tsRules, jsRules, svelteRules } from './rules';

export default (params: {
  tsconfigRootDir: string;
  gitignorePath: string;
  projects?: string[];
}) => {
  const {
    tsconfigRootDir = process.cwd() ?? resolve('.'),
    gitignorePath = resolve(tsconfigRootDir, '.gitignore'),
    projects
  } = params;

  return defineConfig([
    fs.existsSync(gitignorePath) ? includeIgnoreFile(gitignorePath) : [],
    js.configs.recommended,
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
      ignores: ['**/*.js'],
      extends: [ts.configs.recommended, svelte.configs.recommended],
      languageOptions: {
        parserOptions: {
          tsconfigRootDir,
          project: projects,
          extraFileExtensions: ['.svelte'],
          projectService: true,
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
      extends: [ts.configs.recommended],
      ignores: ['**/*.js'],
      languageOptions: {
        parser: ts.parser,
        parserOptions: {
          tsconfigRootDir,
          project: projects
        }
      },
      rules: { ...jsRules, ...tsRules }
    },
    // --- JavaScript files ---
    {
      files: [
        '**/*.js',
        '**/*.mjs',
        '**/*.cjs'
      ],
      ignores: ['**/*.svelte.*'],
      rules: jsRules
    }
  ]);
};
