import request from 'supertest';
import app from '../../src/app';

describe('GET /ping', () => {
  it('should return 200 OK', async (done) => {
    const res = await request(app).get('/ping');
    expect(res.status).toEqual(200);
    done();
  });

  it('should contain a greeting, a date and an url in its response', async (done) => {
    const res = await request(app).get('/ping');
    expect(typeof res.body.message).toBe('string');
    expect(typeof res.body.url).toBe('string');
    expect(typeof res.body.date).toBe('string');
    done();
  });
});
