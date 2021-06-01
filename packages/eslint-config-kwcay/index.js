module.exports = {
  extends: ['eslint-config-airbnb-base'],
  rules: {
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/setupTests.js',
          './testing/**/*.js',
          '**/stories.jsx',
          '**/*.stories.jsx',
          '**/test.js',
          '**/*.test.js',
          '**/test.jsx',
          '**/*.test.jsx',
        ],
      },
    ],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',

    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.stories.jsx'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
      },
    },
  ],
};
