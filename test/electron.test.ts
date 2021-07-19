import * as path from 'path'
import { Application } from 'spectron'

jest.setTimeout(10000)

let app: Application

beforeAll(async () => {
  app = new Application({
    path: path.resolve(__dirname, '..', 'node_modules/.bin/electron'),
    args: [path.resolve(__dirname, 'fixtures/electron.js')],
  })
  await app.start()
})

afterAll(async () => {
  if (app.isRunning()) {
    await app.stop()
  }
})

it('returns false when run in the Electron renderer process', async () => {
  const body = await app.client.$('body')
  expect(await body.getText()).toEqual('false')
})
