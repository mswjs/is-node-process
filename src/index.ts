/**
 * Determines if the current process is a Node.js process.
 */
export function isNodeProcess(): boolean {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return true
  }

  return !!(
    typeof process !== 'undefined' &&
    process.versions &&
    process.versions.node
  )
}
