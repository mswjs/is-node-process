/**
 * Determines if the current process is a Node.js process.
 */
export function isNodeProcess(): boolean {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return true
  }

  if (typeof process !== 'undefined') {
    // Electron (https://www.electronjs.org/docs/latest/api/process#processtype-readonly)
    const type = (process as any).type
    if (type === 'renderer' || type === 'worker') {
      return false
    }


    return !!(
      process.versions &&
      process.versions.node
    )
  }

  return false
}
