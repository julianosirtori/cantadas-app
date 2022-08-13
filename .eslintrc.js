module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    globals: {
        JSX: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'standard',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {},
}
