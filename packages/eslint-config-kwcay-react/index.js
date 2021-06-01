module.exports = {
  extends: ['eslint-config-kwcay-typescript'],
  settings: {
    // Append 'ts' extensions to Airbnb 'import/resolver' setting
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
  rules: {
    // Append 'tsx' to Airbnb 'react/jsx-filename-extension' rule
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
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
