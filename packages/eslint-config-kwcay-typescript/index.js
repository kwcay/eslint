module.exports = {
  extends: ['eslint-config-kwcay'],
  rules: {
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/setupTests.ts',
          './testing/**/*.ts',
          './testing/**/*.tsx',
          '**/stories.tsx',
          '**/*.stories.tsx',
          '**/test.ts',
          '**/*.test.ts',
          '**/test.tsx',
          '**/*.test.tsx',
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['*.stories.tsx'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
      },
    },
  ],
};
