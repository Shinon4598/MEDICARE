import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import'; // ⬅️ NUEVO
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist', 'node_modules']),
  {
    files: ['**/*.{js,jsx}'],
    ignores: ['vite.config.js'],
    plugins: {
      import: importPlugin, // ⬅️ NUEVO (registra el plugin)
    },
    extends: [
      js.configs.recommended,
      react.configs.flat.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      // Opcional: reglas base del plugin import (si están disponibles en tu versión)
      // importPlugin.flatConfigs?.recommended ?? []
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        alias: {
          map: [['@', './src']],
          extensions: ['.js', '.jsx', '.json'],
        },
      },
    },
    rules: {
      'no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]', argsIgnorePattern: '^_' }],
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-console': 'warn',
      'no-debugger': 'warn',
      'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
      'react/self-closing-comp': 'warn',

      // Import rules (ahora sí funcionan)
      'import/named': 'error',
      'import/no-unresolved': 'warn',
    },
  },
]);
