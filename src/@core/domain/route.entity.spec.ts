import { Route, RouteProps } from './route.entity';

describe('Route tests', () => {
  it('Deve instanciar uma rota com os dados corretos', () => {
    const routeProps: RouteProps = {
      title: 'minha rota',
      startPosition: { lat: 15, lng: 15 },
      endPosition: { lat: 20, lng: 20 },
      points: [
        { lat: 16, lng: 16 },
        { lat: 17, lng: 17 },
      ],
    };
    const route = Route.create(routeProps);
    expect(route.props).toStrictEqual({ ...routeProps });
  });

  it('Deve instanciar uma rota com os dados corretos e poinst sendo array quando poins é vazio', () => {
    const routeProps: RouteProps = {
      title: 'minha rota',
      startPosition: { lat: 15, lng: 15 },
      endPosition: { lat: 20, lng: 20 },
    };
    const route = Route.create(routeProps);
    expect(route.props).toStrictEqual({ ...routeProps, points: [] });
  });

  it('Deve atualizar o titulo', () => {
    const routeProps: RouteProps = {
      title: 'minha rota',
      startPosition: { lat: 15, lng: 15 },
      endPosition: { lat: 20, lng: 20 },
    };
    const route = Route.create(routeProps);

    route.updateTitle('novo titulo');
    expect(route.title).toBe('novo titulo');
  });

  it('Deve atualizar o startPosition e o endPosition', () => {
    const routeProps: RouteProps = {
      title: 'minha rota',
      startPosition: { lat: 15, lng: 15 },
      endPosition: { lat: 20, lng: 20 },
    };
    const route = Route.create(routeProps);
    route.updatePosition({ lat: 16, lng: 16 }, { lat: 16, lng: 16 });
    expect(route.props).toStrictEqual({
      title: 'minha rota',
      startPosition: { lat: 16, lng: 16 },
      endPosition: { lat: 16, lng: 16 },
      points: [],
    });
  });
  it('Deve atualizar os points', () => {
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
    route.updatePoints([
      { lat: 16, lng: 16 },
      { lat: 16, lng: 16 },
    ]);
    expect(route.points).toStrictEqual([
      { lat: 16, lng: 16 },
      { lat: 16, lng: 16 },
    ]);
  });
});
