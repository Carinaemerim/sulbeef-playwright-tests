import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';
import eslintConfigPrettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default tseslint.config(
  {
    ignores: ['.features-gen/**', 'node_modules/**', 'test-results/**'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  playwright.configs['flat/recommended'],
  {
    files: ['**/*.ts', '**/*.js'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'playwright/no-skipped-test': 'off', // Allows test skip if necessary
      'playwright/no-standalone-expect': 'off',
      'prettier/prettier': 'error',
    },
  },
  eslintConfigPrettier, // Disable eslint rules that conflict with prettier
);
