import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import nuxt from '@nuxt/eslint-config/flat';

export default tseslint.config(eslint.configs.recommended, tseslint.configs.recommended, nuxt);
