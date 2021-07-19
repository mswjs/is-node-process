import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import packageJson from './package.json'

export default {
  input: 'src/index.ts',
  output: {
    format: 'umd',
    file: packageJson.main,
    name: 'IsNodeProcess',
  },
  plugins: [nodeResolve(), typescript()],
}
