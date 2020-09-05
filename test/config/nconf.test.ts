import nconf from '../../src/config/nconf';

describe('Application NConf Configuration', () => {
  it('should be defined', () => {
    expect(nconf).toBeDefined();
  });
});
