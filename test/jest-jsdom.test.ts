/**
 * @jest-environment jsdom
 */
import { isNodeProcess } from '../src'

it('returns true in the JSDOM in Jest', () => {
  expect(isNodeProcess()).toEqual(true)
})
