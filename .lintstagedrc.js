/**
 * lint-stage 配置文件
 *
 * @author: sunkeysun
 */
const tsconfig = require('./tsconfig')

module.exports = {
   'src/**/*.ts?(x)': (filenames) => {
        const tsOptions = []
        for(let key in tsconfig.compilerOptions) {
            tsOptions.push(`--${key} ${tsconfig.compilerOptions[key]}`)
        }

        return [
            `tsc ${tsOptions.join(' ')} ${filenames.join(' ')}`,
            `eslint --ext ts,tsx --fix ${filenames.join(' ')}`,
        ]
    }
}
