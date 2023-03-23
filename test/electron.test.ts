import { ElectronApplication, Page, _electron as electron } from 'playwright'

jest.setTimeout(10_000)

let app: ElectronApplication | undefined
let page: Page | undefined

beforeAll(async () => {
  app = await electron
    .launch({
      args: [require.resolve('./fixtures/electron.js')],
    })
    .catch((error) => {
      console.error('Failed to launch Electron app', error)
      return undefined
    })

  if (!app) {
    throw new Error('Failed to launch Electron app')
  }

  page = await app.firstWindow().catch((error) => {
    console.error('Failed to get first window', error)
    return undefined
  })
})

afterAll(async () => {
  if (!app) {
    console.log({ app, page })
    throw new Error(
      'Failed to clean up after test: the Electron app is not defined'
    )
  }

  await app.close()
})

it('returns false when run in the Electron renderer process', async () => {
  const body = await page!.locator('body').textContent()
  expect(body!.trim()).toEqual('false')
})
