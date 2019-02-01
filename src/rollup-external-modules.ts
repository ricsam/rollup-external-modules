import { isAbsolute } from 'path'

type external = boolean
type path = string
type rollupExternalModules = (path: path) => external

const rollupExternalModules: rollupExternalModules = (path: path): external => {
  let external: external = true
  if (isAbsolute(path)) {
    if (!path.match(/node_modules/)) {
      external = false
    }
  } else if (path.match(/^\./)) {
    external = false
  }
  return external
}

export default rollupExternalModules
