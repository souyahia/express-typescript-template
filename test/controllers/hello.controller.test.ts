import request from 'supertest';
import app from '../../src/app';

describe('GET /hello', () => {
  it('should return 200 OK', async (done) => {
    const res = await request(app).get('/hello');
    expect(res.status).toEqual(200);
    done();
  });

  it('should contain a message and a date in its response', async (done) => {
    const res = await request(app).get('/ping');
    expect(typeof res.body.message).toBe('string');
    expect(typeof res.body.date).toBe('string');
    done();
  });
});

describe('GET /hello/:name', () => {
  it('should return 200 OK', async (done) => {
    const res = await request(app).post('/hello/test').send({
      language: 'FR',
    });
    expect(res.status).toEqual(200);
    done();
  });

  it('should contain the name in the hello message', async (done) => {
    const res = await request(app).post('/hello/test').send({
      language: 'FR',
    });
    expect(res.body.message).toMatch(/test/i);
    done();
  });

  it('should not contain the date by default', async (done) => {
    const res = await request(app).post('/hello/test').send({
      language: 'FR',
    });
    expect(res.body.date).not.toBeDefined();
    done();
  });

  it('should not contain the date when sendDate = true', async (done) => {
    const res = await request(app).post('/hello/test').send({
      language: 'FR',
      sendDate: true,
    });
    expect(typeof res.body.date).toBe('string');
    done();
  });

  it('should return 400 Bad Request when given invalid language', async (done) => {
    const res = await request(app).post('/hello/test').send({
      language: 'ES',
    });
    expect(res.status).toEqual(400);
    done();
  });

  it('should return 400 Bad Request when given invalid sendDate', async (done) => {
    const res = await request(app).post('/hello/test').send({
      language: 'FR',
      sendDate: 'test',
    });
    expect(res.status).toEqual(400);
    done();
  });
});
