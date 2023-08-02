const mkfile = (name, meta = 0) => {
  const file = {}
  file.name = name
  file.type = 'file'
  if (meta !== 0) file.meta = meta
  return file
}

const mkdir = (name, children = 0, meta = 0) => {
  const dir = {}
  dir.name = name
  dir.type = 'dir'
  if (meta !== 0) dir.meta = meta
  if (children !== 0) dir.children = children
  return dir
}

const license = mkfile('LICENSE')
const cli = mkdir('cli', [license])
const babel = mkdir('@babel', [cli])
const nodeModules = mkdir('node_modules', [babel])
const babelConfigJs = mkfile('babel.config.js', { type: 'text/javascript' })
const halfTestJs = mkfile('half.test.js', { type: 'text/javascript' })
const Test = mkdir('__tests__', [halfTestJs])
const dist = mkdir('dist')
const makeFile = mkfile('Makefile')
const readmeMd = mkfile('README.md')
const nodeJsPackage = mkdir('nodejs-package', [makeFile, readmeMd, dist, Test, babelConfigJs, nodeModules], { hidden: true })

const getChildren = (item) => item.children || `${item.name} has no children`
const getMeta = (item) => item.meta || `${item.name} has no meta`
const getName = (item) => item.name

const 
console.log(getChildren(license))
