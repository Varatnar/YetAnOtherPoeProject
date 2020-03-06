const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        '@typescript-eslint/eslint-plugin',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
    ],
    rules: {
        'no-console': isDev ? 'warn' : 'error',
        'no-debugger': isDev ? 'warn' : 'error',
        'prettier/prettier': isDev ? 'warn' : 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
    },
    overrides: [
        {
            files: ['**/*.js'],
            env: {
                node: true,
            },
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
};
