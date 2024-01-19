module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
    rules: {
        'no-console': 'warn',
        'no-unused-expressions': 'error',
        curly: 'error',
        'import/no-default-export': ['error'],
        'import/no-unresolved': ['error', { commonjs: true }],
        'react/jsx-no-useless-fragment': ['error'],
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
};
