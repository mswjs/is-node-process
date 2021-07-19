import * as path from 'path'
import { Page, Browser, chromium, firefox } from 'playwright'

const browsers: Browser[] = []

async function prepare(browser: Browser): Promise<Page> {
  const page = await browser.newPage()
  await page.goto(`file:${path.join(__dirname, 'browser.html')}`)
  return page
}

afterAll(async () => {
  await Promise.all(browsers.map((browser) => browser.close()))
})

it('returns true when run in Chrome', async () => {
  const browser = await chromium.launch()
  browsers.push(browser)
  const page = await prepare(browser)
  const bodyText = await page.innerText('body')
  expect(bodyText).toEqual('false')
})

it('returns true when run in Firefox', async () => {
  const browser = await firefox.launch()
  browsers.push(browser)
  const page = await prepare(browser)
  const bodyText = await page.innerText('body')
  expect(bodyText).toEqual('false')
})
