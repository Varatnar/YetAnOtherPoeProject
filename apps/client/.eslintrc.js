const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

module.exports = {
    env: {
        node: true,
    },
    extends: ['plugin:vue/essential', '@vue/prettier', '@vue/typescript'],
    rules: {
        'no-console': isDev ? 'warn' : 'error',
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.{j,t}s?(x)',
                '**/src/**/*.spec.{j,t}s?(x)',
            ],
            env: {
                jest: true,
            },
        },
    ],
};
