import { IResolve } from './app-paths'
import { QuasarConf } from './configuration/conf'

type TCommand = (args: Array<string>, param: Record<string, unknown>) => Promise<void>

type TChainObject = {}

interface ICommandArgs {
  args: Array<string>,
  params: Record<string, unknown>
}

interface IndexAPIHooks {
  extendQuasarConf: Array<(cfg: Record<string, unknown>, ctx: Record<string, unknown>) => void>,
  extendWebpack: Array<(cfg: Record<string, unknown>, invoke: { isClient: boolean, isServer: boolean}) => void>,
  chainWebpackMainElectronProcess: Array<(cfg: TChainObject) => void>,
  extendWebpackMainElectronProcess: Array<(cfg: Record<string, unknown>) => void>,
  chainWebpackWebserver: Array<(cfg: TChainObject) => void>,
  extendWebpackWebserver: Array<(cfg: Record<string, unknown>) => void>,
  chainWebpack: Array<(cfg: TChainObject, invoke: { isClient: boolean, isServer: boolean}) => void>,
  beforeDev: Array<(api: IndexAPI, quasarConf: QuasarConf) => Promise<void> | void>,
  afterDev: Array<(api: IndexAPI, quasarConf: QuasarConf) => Promise<void> | void>,
  beforeBuild: Array<(api: IndexAPI, quasarConf: QuasarConf) => Promise<void> | void>,
  afterBuild: Array<(api: IndexAPI, quasarConf: QuasarConf) => Promise<void> | void>,
  onPublish: Array<(arg: string, quasarConf?: QuasarConf, distDir?: string) => Promise<void> | void>,
  commands: Record<string, (args: ICommandArgs) => Promise<void> | void>
  describeApi: Record<string, { callerPath: string, relativePath: string }>
}

export interface IndexAPI {
  ctx: Record<string, unknown>
  extId: string
  prompts: Record<string, unknown>
  resolve: IResolve,
  appDir: string,
  __hooks: IndexAPIHooks,
}

export interface InstallAPI {
  extId: string
  prompts: Record<string, unknown>
  resolve: IResolve,
  appDir: string,
  __needsNodeModulesUpdate: boolean,
  __hooks: {
    renderFolders: Array<(args: { source: string, rawCopy: boolean, scope: Record<string, unknown> }) => void>,
    renderFiles: Array<(args: { sourcePath: string, targetPath: string, rawCopy: boolean, scope: Record<string, unknown>, overwritePrompt?: boolean }) => void>,
    exitLog: Array<string>
  }
}

export interface UninstallAPI {
  extId: string
  prompts: Record<string, unknown>
  resolve: IResolve,
  appDir: string,
  __hooks: {
    exitLog: Array<string>
  }
}