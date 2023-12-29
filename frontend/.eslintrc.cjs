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
    globals: {
        __APP_URL__: true,
        __API_URL__: true,
    },
    plugins: [
        '@typescript-eslint',
    ],
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
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
    // settings: {
    //     'import/resolver': {
    //         node: {
    //             extensions: ['.js', '.vue', '.ts', '.d.ts'],
    //         },
    //         alias: {
    //             extensions: ['.vue', '.js', '.ts', '.scss', '.d.ts'],
    //             map: [
    //                 ['@', './src'],
    //             ],
    //         },
    //     },
    // }
};
