import { RouteProps } from '../domain/route.entity';
import { RouteInMemoryRepository } from '../infrastructure/databases/route-memory-repository';
import { CreateRouteUseCase } from './route-create-use-case';

describe('Caso de uso Rota de criacao', () => {
  it('Deve garantir que ocorreu o retorno dos dados corretamente', async () => {
    const repositoryInMemory = new RouteInMemoryRepository();
    const createRouteUseCase = new CreateRouteUseCase(repositoryInMemory);
    const routeRepository = new RouteInMemoryRepository();
    const route: RouteProps = {
      title: 'minha rota',
      startPosition: { lat: 15, lng: 15 },
      endPosition: { lat: 20, lng: 20 },
      points: [
        { lat: 16, lng: 16 },
        { lat: 17, lng: 17 },
      ],
    };
    jest
      .spyOn(routeRepository, 'insert')
      .mockResolvedValueOnce(new Promise((resolve) => resolve()));
    const promise = await createRouteUseCase.execute(route);
    expect(promise).toEqual({
      id: repositoryInMemory.items[0].id,
      title: 'minha rota',
      startPosition: { lat: 15, lng: 15 },
      endPosition: { lat: 20, lng: 20 },
      points: [
        { lat: 16, lng: 16 },
        { lat: 17, lng: 17 },
      ],
    });
  });
});
