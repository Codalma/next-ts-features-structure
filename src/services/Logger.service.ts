import { ILoggerService } from '@/interfaces';

export class LoggerService implements ILoggerService {
  private readonly logLevel: string;

  private constructor(env: string) {
    this.logLevel = env === 'development' ? 'debug' : 'error';
  }

  static getInstance(env: string) {
    return new LoggerService(env);
  }

  logError(error: string) {
    if (this.logLevel === 'error' || this.logLevel === 'debug') console.error(error);
  }

  logWarn(warn: string) {
    if (this.logLevel === 'debug') console.warn(warn);
  }

  logInfo(info: string) {
    if (this.logLevel === 'debug') console.info(info);
  }

  logDebug(debug: string) {
    if (this.logLevel === 'debug') console.debug(debug);
  }
}
