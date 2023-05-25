import { LoggerService } from '@/services/Logger.service';

describe('LoggerService tests suite', () => {
  const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation();
  const consoleWarnMock = jest.spyOn(console, 'warn').mockImplementation();
  const consoleInfoMock = jest.spyOn(console, 'info').mockImplementation();
  const consoleDebugMock = jest.spyOn(console, 'debug').mockImplementation();

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Scenario: Logging in development mode', () => {
    describe('Given the application is running in development mode', () => {
      // Arrange
      const env = 'development';
      const logger = LoggerService.getInstance(env);

      test('When logError method is called', () => {
        // Arrange
        const error = 'An error occurred';

        // Act
        logger.logError(error);

        // Assert
        expect(consoleErrorMock).toHaveBeenCalledTimes(1);
        expect(consoleErrorMock).toHaveBeenCalledWith(error);
      });

      test('When logWarn method is called', () => {
        // Arrange
        const warning = 'A warning message';

        // Act
        logger.logWarn(warning);

        // Assert
        expect(consoleWarnMock).toHaveBeenCalledTimes(1);
        expect(consoleWarnMock).toHaveBeenCalledWith(warning);
      });

      test('When logInfo method is called', () => {
        // Arrange
        const info = 'An info message';

        // Act
        logger.logInfo(info);

        // Assert
        expect(consoleInfoMock).toHaveBeenCalledTimes(1);
        expect(consoleInfoMock).toHaveBeenCalledWith(info);
      });

      test('When logDebug method is called', () => {
        // Arrange
        const debug = 'A debug message';

        // Act
        logger.logDebug(debug);

        // Assert
        expect(consoleDebugMock).toHaveBeenCalledTimes(1);
        expect(consoleDebugMock).toHaveBeenCalledWith(debug);
      });
    });
  });

  describe('Scenario: Logging in production mode', () => {
    describe('Given the application is running in production mode', () => {
      // Arrange
      const env = 'production';
      const logger = LoggerService.getInstance(env);

      test('When logError method is called', () => {
        // Arrange
        const error = 'An error occurred';

        // Act
        logger.logError(error);

        // Assert
        expect(consoleErrorMock).toHaveBeenCalledTimes(1);
        expect(consoleErrorMock).toHaveBeenCalledWith(error);
      });

      test('When logWarn method is called', () => {
        // Arrange
        const warning = 'A warning message';

        // Act
        logger.logWarn(warning);

        // Assert
        expect(consoleWarnMock).not.toHaveBeenCalled();
      });

      test('When logInfo method is called', () => {
        // Arrange
        const info = 'An info message';

        // Act
        logger.logInfo(info);

        // Assert
        expect(consoleInfoMock).not.toHaveBeenCalled();
      });

      test('When logDebug method is called', () => {
        // Arrange
        const debug = 'A debug message';

        // Act
        logger.logDebug(debug);

        // Assert
        expect(consoleDebugMock).not.toHaveBeenCalled();
      });
    });
  });
});
