import request from 'supertest';
import app from '../../src/app';

describe('Unknown endpoint controller', () => {
  it('should return 400 Bad Request after GET bad endpoint with an error message', async (done) => {
    const res = await request(app).get('/test-bad-endpoint');
    expect(res.status).toEqual(400);
    expect(typeof res.body.message).toBe('string');
    done();
  });

  it('should return 400 Bad Request after POST bad endpoint with an error message', async (done) => {
    const res = await request(app).post('/test-bad-endpoint');
    expect(res.status).toEqual(400);
    expect(typeof res.body.message).toBe('string');
    done();
  });

  it('should return 400 Bad Request after PUT bad endpoint with an error message', async (done) => {
    const res = await request(app).put('/test-bad-endpoint');
    expect(res.status).toEqual(400);
    expect(typeof res.body.message).toBe('string');
    done();
  });

  it('should return 400 Bad Request after DELETE bad endpoint with an error message', async (done) => {
    const res = await request(app).delete('/test-bad-endpoint');
    expect(res.status).toEqual(400);
    expect(typeof res.body.message).toBe('string');
    done();
  });

  it('should return 400 Bad Request after PATCH bad endpoint with an error message', async (done) => {
    const res = await request(app).patch('/test-bad-endpoint');
    expect(res.status).toEqual(400);
    expect(typeof res.body.message).toBe('string');
    done();
  });
});
