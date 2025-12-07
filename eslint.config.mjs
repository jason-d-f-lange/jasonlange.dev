import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import nextVitals from 'eslint-config-next/core-web-vitals';
import { defineConfig, globalIgnores } from 'eslint/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  // Next.js core web vitals config
  ...nextVitals,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),

  // Global rules
  {
    rules: {
      'react/self-closing-comp': 'error',
    },
  },

  // Test files only
  ...compat
    .extends('plugin:testing-library/react', 'plugin:jest-dom/recommended')
    .map((config) => ({
      ...config,
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    })),

  // Additional test rules
  {
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    rules: {
      'testing-library/no-debugging-utils': 'error',
      'testing-library/prefer-explicit-assert': 'error',
      'testing-library/prefer-user-event': 'error',
    },
  },
]);
