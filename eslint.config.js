import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  { files: ['**/*.{js,ts,tsx}'], plugins: { js }, extends: ['js/recommended'] },
  { files: ['**/*.{js,ts,tsx}'], languageOptions: { globals: globals.browser } },

  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  { rules: { 'react/react-in-jsx-scope': 'off' } },

  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
]);
