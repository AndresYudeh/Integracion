import { Server } from "../Server";
import request from 'supertest';

describe('GET /tasks', () => {
  test('should respond with a 200 status code', async () => {
    const response = await request(Server).get('/tasks').send();
    
    // Verificar que el código de estado sea 200
    expect(response.status).toBe(200);

    // Puedes agregar más aserciones para verificar otros aspectos de la respuesta aquí
  });
});
