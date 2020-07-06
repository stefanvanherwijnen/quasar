// import { IResolve } from './app-paths'
// import { QuasarConf } from './configuration/conf'

// type TCommand = (args: Array<string>, param: Record<string, unknown>) => Promise<void>

// type TChainObject = {}

// interface ICommandArgs {
//   args: Array<string>,
//   params: Record<string, unknown>
// }

// interface IndexAPIHooks {
//   extendQuasarConf: Array<(cfg: Record<string, unknown>, ctx: Record<string, unknown>) => void>,
//   extendWebpack: Array<(cfg: Record<string, unknown>, invoke: { isClient: boolean, isServer: boolean}) => void>,
//   chainWebpackMainElectronProcess: Array<(cfg: TChainObject) => void>,
//   extendWebpackMainElectronProcess: Array<(cfg: Record<string, unknown>) => void>,
//   chainWebpackWebserver: Array<(cfg: TChainObject) => void>,
//   extendWebpackWebserver: Array<(cfg: Record<string, unknown>) => void>,
//   chainWebpack: Array<(cfg: TChainObject, invoke: { isClient: boolean, isServer: boolean}) => void>,
//   beforeDev: Array<(api: IndexAPI, quasarConf: QuasarConf) => Promise<void> | void>,
//   afterDev: Array<(api: IndexAPI, quasarConf: QuasarConf) => Promise<void> | void>,
//   beforeBuild: Array<(api: IndexAPI, quasarConf: QuasarConf) => Promise<void> | void>,
//   afterBuild: Array<(api: IndexAPI, quasarConf: QuasarConf) => Promise<void> | void>,
//   onPublish: Array<(arg: string, quasarConf?: QuasarConf, distDir?: string) => Promise<void> | void>,
//   commands: Record<string, (args: ICommandArgs) => Promise<void> | void>
//   describeApi: Record<string, { callerPath: string, relativePath: string }>
// }

export interface IndexAPI {
  // ctx: Record<string, unknown>
  // extId: string
  // prompts: Record<string, unknown>
  // resolve: IResolve,
  // appDir: string,
  // __hooks: IndexAPIHooks,
  getPersistentConf: () => Record<string, unknown>,
  setPersistentConf: (cfg: Record<string, unknown>) => void,
  mergePersistentConf: (cfg: Record<string, unknown>) => void,
  compatibleWith: (packageName: string, semverCondition?: string) => void,
  hasPackage: (packageName: string, semverCondition?: string) => boolean,
  hasExtension: (extId: string) => boolean,
  getPackageVersion: (packageName: string) => string|undefined
  extendQuasarConf: (fn: Function) => void,
  chainWebpack: (fn: Function) => void,
  extendWebpack: (fn: Function) => void,
  chainWebpackMainElectronProcess: (fn: Function) => void,
  extendWebpackMainElectronProcess: (fn: Function) => void,
  chainWebpackWebserver: (fn: Function) => void,
  extendWebpackWebserver: (fn: Function) => void,
  registerCommand: (commandName: string, fn: Function) => void,
  registerDescribeApi: (name: string, relativePath: string) => void,
  beforeDev: (fn: Function) => void,
  afterDev: (fn: Function) => void,
  beforeBuild: (fn: Function) => void,
  afterBuild: (fn: Function) => void,
  onPublish: (fn: Function) => void,
}

export interface InstallAPI {
  // extId: string
  // prompts: Record<string, unknown>
  // resolve: IResolve,
  // appDir: string,
  // __needsNodeModulesUpdate: boolean,
  // __hooks: {
  //   renderFolders: Array<(args: { source: string, rawCopy: boolean, scope: Record<string, unknown> }) => void>,
  //   renderFiles: Array<(args: { sourcePath: string, targetPath: string, rawCopy: boolean, scope: Record<string, unknown>, overwritePrompt?: boolean }) => void>,
  //   exitLog: Array<string>
  // },
  getPersistentConf: () => Record<string, unknown>,
  setPersistentConf: (cfg: Record<string, unknown>) => void,
  mergePersistentConf: (cfg: Record<string, unknown>) => void,
  compatibleWith: (packageName: string, semverCondition?: string) => void,
  hasPackage: (packageName: string, semverCondition?: string) => boolean,
  hasExtension: (extId: string) => boolean,
  getPackageVersion: (packageName: string) => string|undefined,
  extendPackageJson: (extPkg: object | string) => void,
  extendJsonFile: (file: string, newData: object) => void,
  render: (templatePath: string, scope?: object) => void,
  renderFile: (relativeSourcePath: string, relativeTargetPath: string, scope?: object) => void,
  onExitLog: (msg: string) => void
}

export interface UninstallAPI {
  // extId: string
  // prompts: Record<string, unknown>
  // resolve: IResolve,
  // appDir: string,
  // __hooks: {
  //   exitLog: Array<string>
  // },
  getPersistentConf: () => Record<string, unknown>,
  hasExtension: (extId: string) => boolean,
  removePath: (__path: string) => void,
  onExitLog: (msg: string) => void,
}