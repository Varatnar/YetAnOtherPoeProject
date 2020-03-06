module.exports = {
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/prettier',
        '@vue/typescript',
    ],
    rules: {},
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
