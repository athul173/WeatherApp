const baseStyleRules = require('eslint-config-airbnb-base/rules/style');

module.exports = {
  root: true,
  extends: ['@react-native', 'airbnb-typescript', 'prettier'],
  plugins: [
    // For some reason we have to manually specify the import plugin here even
    //  though it should be loaded by airbnb-typescript.
    'import',
  ],
  env: {
    jest: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.native.js'],
      },
    },
  },
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  ignorePatterns: ['.eslintrc.js', 'coverage/'],
  rules: {
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/static-property-placement': ['error', 'static public field'],
    // Allow for .. of syntax - regenerator runtime is not needed in RN js anyway
    'no-restricted-syntax': baseStyleRules.rules['no-restricted-syntax'].filter(
      rule => typeof rule === 'string' || rule.selector !== 'ForOfStatement',
    ),
  },
  overrides: [
    {
      files: ['*.spec.tsx'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
        'react/require-default-props': 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'variable',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            filter: {
              regex: '^(UNSAFE_).+$',
              match: false,
            },
          },
        ],
      },
    },
  ],
};
