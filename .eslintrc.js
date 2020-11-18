'use strict';

module.exports = {
  parserOptions: {
    project: './tsconfig.json',
  },

  rules: {
    'func-style': ['error', 'declaration'],
  },

  overrides: [
    {
      files: '.eslintrc.js',
      plugins: ['eslint-config'],
      rules: {
        'eslint-config/sort-rules': 'error',
      },
    },

    {
      files: '*.js',
      extends: 'plugin:@superdispatch/node',
    },

    {
      files: [
        '**/packages/__docs__/**/*.{ts,tsx}',
        '**/packages/dates/**/*.{ts,tsx}',
        '**/packages/forms/**/*.{ts,tsx}',
        '**/packages/hooks/**/*.{ts,tsx}',
        '**/packages/phones/**/*.{ts,tsx}',
        '**/packages/ui/**/*.{ts,tsx}',
      ],
      extends: [
        'plugin:@superdispatch/react',
        'plugin:@superdispatch/typescript',
      ],

      settings: {
        react: {
          version: 'detect',
        },
      },

      rules: {
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          { allowExpressions: true },
        ],

        'eslint-comments/no-use': [
          'error',
          { allow: ['eslint-disable-next-line'] },
        ],

        'import/no-cycle': 'error',

        'import/no-internal-modules': [
          'error',
          {
            allow: [
              '**/packages/*/src/**',
              'dequal/lite',
              '@material-ui/core/transitions',
              '@material-ui/core/styles/createTypography',
              '@material-ui/core/styles/createBreakpoints',
            ],
          },
        ],

        'react-hooks/exhaustive-deps': [
          'error',
          {
            additionalHooks:
              '^(useMemoWith|usePureMemo|usePromise|useIsomorphicLayoutEffect)$',
          },
        ],

        'react/display-name': 'off',

        'no-restricted-imports': [
          'error',
          {
            paths: [
              {
                name: 'dequal',
                message: 'Use "dequal/lite" instead.',
              },

              {
                name: '@material-ui/core',
                importNames: ['makeStyles'],
                message: 'Import from "@material-ui/styles" instead.',
              },
            ],
          },
        ],
      },
    },

    {
      files: ['**/packages/eslint-plugin/**/*.ts'],
      extends: ['plugin:@superdispatch/ts-node'],
    },

    {
      files: [
        '**/setupTests.ts',
        '**/globalSetup.ts',
        '**/*.spec.{ts,tsx}',
        '**/jestutils/**/*.ts',
        '**/testutils/**/*.ts',
        '**/__tests__/**/*.{ts,tsx}',
        '**/__testutils__/**/*.{ts,tsx}',
      ],
      extends: ['plugin:@superdispatch/ts-jest'],
      rules: {
        '@typescript-eslint/no-namespace': 'off',
        'import/no-anonymous-default-export': 'off',
      },
    },

    {
      files: ['**/packages/__docs__/**/**.*'],
      rules: {
        'import/no-internal-modules': 'off',
      },
    },

    {
      files: ['**/*.stories.{ts,tsx}'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        'import/no-anonymous-default-export': 'off',
        'import/no-internal-modules': 'off',
        'func-style': ['error', 'expression'],
        'no-alert': 'off',
      },
    },
  ],
};
