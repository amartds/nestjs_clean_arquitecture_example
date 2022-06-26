import { Route, RouteProps } from '../../domain/route.entity';
import { RouteInMemoryRepository } from './route-memory-repository';

describe('testes para repository em memoria', () => {
  it('deve inserir em memoria os dados corretamente', async () => {
    const repoInMemory = new RouteInMemoryRepository();
    const routeProps: RouteProps = {
      title: 'minha rota',
      startPosition: { lat: 15, lng: 15 },
      endPosition: { lat: 20, lng: 20 },
      points: [
        { lat: 15, lng: 15 },
        { lat: 20, lng: 20 },
      ],
    };
    const route = Route.create(routeProps);
    await repoInMemory.insert(route);
    expect(repoInMemory.insert).toBeTruthy();
    expect(repoInMemory.items).toHaveLength(1);
    expect(repoInMemory.items).toStrictEqual([route]);
  });
});
