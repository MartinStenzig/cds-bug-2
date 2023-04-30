import cds from '@sap/cds/lib/index.js'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

describe('Test group 2', function () {
  const { expect } = cds.test(path.join(__dirname, '/../..'))

  it('test case1', function () {
    const t1 = {}

    expect(t1).to.exist
  })
})
