/**
 * @jest-environment node
 */
import { isNodeProcess } from '../src'

it('returns true when run in Node.js in Jest', () => {
  expect(isNodeProcess()).toEqual(true)
})
