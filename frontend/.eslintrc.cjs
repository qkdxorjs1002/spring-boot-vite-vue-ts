module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: [
        '@typescript-eslint',
    ],
    parserOptions: {
        ecmaVersion: 'esnext',
        sourceType: 'module',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/multi-word-component-names': 'off',
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
        }
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.vue', '.ts', '.d.ts'],
            },
            alias: {
                extensions: ['.vue', '.js', '.ts', '.scss', '.d.ts'],
                map: [
                    ['@/components', './src/components'],
                    ['@/pages', './src/pages'],
                    ['@/router', './src/router'],
                    ['@/store', './src/store'],
                    ['@/styles', './src/styles'],
                    ['@/types', './src/types'],
                    ['@/utils', './src/utils'],
                ],
            },
        },
    }
}
