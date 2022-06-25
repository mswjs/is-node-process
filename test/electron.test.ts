import * as path from 'path'
import { ElectronApplication, Page, _electron as electron } from 'playwright'

jest.setTimeout(10000)

let app: ElectronApplication
let page: Page

beforeAll(async () => {
  app = await electron.launch({
    args: [path.resolve(__dirname, 'fixtures/electron.js')],
  })
  page = await app.firstWindow();
})

afterAll(async () => {
  await app.close()
})

it('returns false when run in the Electron renderer process', async () => {
  const body = await page.locator('body').textContent()
  expect(body.trim()).toEqual('false')
})
