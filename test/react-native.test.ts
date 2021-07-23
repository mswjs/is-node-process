/**
 * @jest-environment node
 */
import { isNodeProcess } from '../src'

declare global {
  namespace NodeJS {
    interface Global {
      navigator: {
        product: string
      }
    }
  }
}

let originalProcess: typeof global['process']
let originalNavigator: typeof global['navigator']

beforeAll(() => {
  originalProcess = global.process
  originalNavigator = global.navigator

  global.process = {
    env: {
      NODE_ENV: 'development',
    },
  } as any

  /**
   * React Native has a unique property to determine that the process
   * is running in a React Native environment.
   * @see https://github.com/facebook/react-native/issues/1331
   * @see https://github.com/facebook/react-native/blob/6d6c68c2c639b6473e049f7d916690b92e921c7e/Libraries/Core/setUpNavigator.js
   * @see https://github.com/facebook/react-native/blob/6d6c68c2c639b6473e049f7d916690b92e921c7e/Libraries/Core/setUpGlobals.js
   */
  global.navigator = {
    product: 'ReactNative',
  } as any
})

afterAll(() => {
  global.process = originalProcess
  global.navigator = originalNavigator
})

it('returns true when run in React Native', () => {
  expect(isNodeProcess()).toEqual(true)
})
