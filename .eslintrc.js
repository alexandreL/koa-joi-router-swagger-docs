module.exports = {
    env: {
        node: true,
        es6: true,
    },
    globals: {
        describe: true,
        it: true
    },
    extends: 'eslint:recommended',
    rules: {
        'no-console': [ 'error', { allow: [ 'warn', 'error' ] } ],
        indent: [ 'error', 4 ],
        'linebreak-style': [ 'error', 'unix' ],
        quotes: [ 'error', 'single' ],
        semi: [ 'error', 'never' ],
    },
}
