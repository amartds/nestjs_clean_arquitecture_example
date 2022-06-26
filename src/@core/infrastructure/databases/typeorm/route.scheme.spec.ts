import { Route } from '../../../domain/route.entity';
import { DataSource } from 'typeorm';
import { RouteSchema } from './route.schema';
describe('RouteSchema', () => {
  it('create', async () => {
    const ds = new DataSource({
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      logging: true,
      entities: [RouteSchema],
    });

    await ds.initialize();

    const route = Route.create({
      title: 'minha rota de testes',
      startPosition: { lat: 12, lng: 12 },
      endPosition: { lat: 13, lng: 13 },
      points: [
        { lat: 13, lng: 13 },
        { lat: 13, lng: 13 },
      ],
    });
    const routeRepo = ds.getRepository(Route);
    await routeRepo.save(route);
  });
});
