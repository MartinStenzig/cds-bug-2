import cds from '@sap/cds/lib/index.js'
import path from 'path'
import { fileURLToPath } from 'url'

// enable __dirname in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url))

let expect = null

describe('Test group 1', function () {
  // expect is a chai assertion library based on cds test
  ({ expect } = cds.test(path.join(__dirname, '/../..'), '--profile', 'autotest'))

  it('test case1', function () {
    const t1 = {}

    expect(t1).to.exist
  })
})
