import { RouteInMemoryRepository } from '../infrastructure/databases/route-memory-repository';

describe('Caso de uso Rota de listagem', () => {
  it('Deve listar todas as rotas', async () => {
    const repositoryInMemory = new RouteInMemoryRepository();
    const promise = await repositoryInMemory.findAll();

    expect(promise).toBeTruthy();
  });
});
