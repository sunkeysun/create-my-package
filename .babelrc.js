/**
 * babel 配置文件
 *
 * @author: sunkeysun
 */

module.exports = (api) => {
    api.cache.never()

    return {
        presets: [
            ['@babel/preset-env', {
                targets: {
                    browsers: '> 0.1%, not ie <= 8',
                    node: '10',
                },
            }],
            ['@babel/preset-typescript', {
                isTSX: true,
                allExtensions: true,
                allowDeclareFields: true,
                allowNamespaces: true,
            }],
        ],
        plugins: [
            '@babel/plugin-proposal-export-default-from',
            '@babel/plugin-proposal-export-namespace-from',
            '@babel/plugin-proposal-optional-chaining',
            ['@babel/transform-runtime'],
            ['module-resolver', {
                alias: {
                    src: './src',
                },
            }],
        ],
    }
}
