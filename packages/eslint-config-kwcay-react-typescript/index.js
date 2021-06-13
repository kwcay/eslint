const { rules } = require('eslint-config-airbnb-typescript/lib/shared');

module.exports = {
  extends: ['eslint-config-airbnb-typescript', 'kwcay-rules'],
  rules: {
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [
      rules['import/no-extraneous-dependencies'][0],
      {
        ...rules['import/no-extraneous-dependencies'][1],
        devDependencies: [
          ...rules['import/no-extraneous-dependencies'][1].devDependencies,
          '**/setupTests.ts',
          './testing/**/*.{ts,tsx}',
          '**/stories.tsx',
          '**/*.stories.tsx',
        ],
      },
    ],
    'react/react-in-jsx-scope': 'off',
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
