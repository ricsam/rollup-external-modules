import rollupExternalModules from '../src/rollup-external-modules'

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('rollupExternalModules handles module name', () => {
    const path = 'some-module'
    expect(rollupExternalModules(path)).toBe(true)
  })

  it('rollupExternalModules will bundle relative path to node_modules', () => {
    const path = './some-module/node_modules'
    expect(rollupExternalModules(path)).toBe(false)
  })

  it('rollupExternalModules handles forward relative path', () => {
    const path = './some-module'
    expect(rollupExternalModules(path)).toBe(false)
  })

  it('rollupExternalModules handles backward relative path', () => {
    const path = '../some-module'
    expect(rollupExternalModules(path)).toBe(false)
  })

  it('rollupExternalModules handles same directory relative path', () => {
    const path = '.'
    expect(rollupExternalModules(path)).toBe(false)
  })

  it('rollupExternalModules handles resolved relative path', () => {
    const path = '/root/module'
    expect(rollupExternalModules(path)).toBe(false)
  })

  it('rollupExternalModules handles resolved relative path to module', () => {
    const path = '/root/module/node_modules/another'
    expect(rollupExternalModules(path)).toBe(true)
  })
})
