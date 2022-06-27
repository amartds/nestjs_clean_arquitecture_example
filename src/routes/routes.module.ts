import { Module } from '@nestjs/common';
import { TypeOrmModule, getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { RoutesController } from './routes.controller';
import { RouteInMemoryRepository } from '../@core/infrastructure/databases/route-memory-repository';
import { CreateRouteUseCase } from '../@core/application/route-create-use-case';
import { RouteRepository } from '../@core/domain/route-repository';
import { ListRouteUseCase } from '../@core/application/route-list-all-use-case';
import { RouteSchema } from '../@core/infrastructure/databases/typeorm/route.schema';
import { RouteTypeormRepository } from 'src/@core/infrastructure/databases/typeorm/route.typeorm.repository';
import { Route } from '../@core/domain/route.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RouteSchema])],
  controllers: [RoutesController],
  providers: [
    {
      provide: RouteTypeormRepository,
      useFactory: (dataSource: DataSource) => {
        return new RouteTypeormRepository(dataSource.getRepository(Route));
      },
      inject: [getDataSourceToken()],
    },
    {
      provide: RouteInMemoryRepository,
      useClass: RouteInMemoryRepository,
    },
    {
      provide: CreateRouteUseCase,
      useFactory: (routeRepository: RouteRepository) => {
        return new CreateRouteUseCase(routeRepository);
      },
      inject: [RouteTypeormRepository],
    },
    {
      provide: ListRouteUseCase,
      useFactory: (routeRepository: RouteRepository) => {
        return new ListRouteUseCase(routeRepository);
      },
      inject: [RouteTypeormRepository],
    },
  ],
})
export class RoutesModule {}
