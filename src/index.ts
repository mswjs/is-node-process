/**
 * Determines if the current process is a Node.js process.
 */
export function isNodeProcess(): boolean {
  return !!(
    typeof process !== 'undefined' &&
    process.versions &&
    process.versions.node
  )
}
