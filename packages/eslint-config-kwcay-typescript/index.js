import { baseRules } from 'eslint-config-airbnb-typescript/lib/shared';

module.exports = {
  extends: ['eslint-config-airbnb-typescript/base', 'kwcay-rules'],
  rules: {
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [
      baseRules['import/no-extraneous-dependencies'][0],
      {
        ...baseRules['import/no-extraneous-dependencies'][1],
        devDependencies: [
          ...baseRules['import/no-extraneous-dependencies'][1].devDependencies,
          '**/setupTests.ts',
          './testing/**/*.{ts,tsx}',
          '**/stories.tsx',
          '**/*.stories.tsx',
        ],
      },
    ],
  },
};
