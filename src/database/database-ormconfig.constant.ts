import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import config from 'config';

import { LoggerService } from '../common/logger/logger.service';

const settings: IDBSettings = config.get('DB_SETTINGS');

export function getOrmConfig(): TypeOrmModuleOptions {
  let ormConfig: TypeOrmModuleOptions;

  if (process.env.NODE_ENV !== 'test') {
    ormConfig = {
      type: 'postgres',
      ...settings,
      database: `${settings.database}_${process.env.NODE_ENV}`,
      entities: [__dirname + '../../**/*.entity{.ts,.js}'],
      logger: new LoggerService('SQL'),
      maxQueryExecutionTime: 0.1 /** To log request runtime */,
      synchronize: true,
    };
  } else {
    ormConfig = {
      type: 'sqlite',
      database: ':memory:',
      entities: [__dirname + '../../**/*.entity{.ts,.js}'],
      keepConnectionAlive: true,
      synchronize: true,
    };
  }
  return ormConfig;
}