import logger from '../src/logger';

describe('Application Logger', () => {
  it('should be defined', () => {
    expect(logger).toBeDefined();
  });

  it('should not throw when logging messages at different levels', () => {
    expect(() => {
      logger.trace('[TEST] Trying to log something at trace level...');
      logger.debug('[TEST] Trying to log something at debug level...');
      logger.info('[TEST] Trying to log something at info level...');
      logger.warn('[TEST] Trying to log something at warn level...');
      logger.error('[TEST] Trying to log something at error level...');
      logger.fatal('[TEST] Trying to log something at fatal level...');
    }).not.toThrow();
  });
});
