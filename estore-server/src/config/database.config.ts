import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default (configService: ConfigService): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get('DATABASE_HOST', 'db'),
  port: configService.get('DATABASE_PORT', 5432),
  username: configService.get('DATABASE_USERNAME', 'root'),
  password: configService.get('DATABASE_PASSWORD', 'Debuger@3011'),
  database: configService.get('DATABASE_NAME', 'estore_db'),
  autoLoadEntities: true,
  synchronize: configService.get('TYPEORM_SYNC', true),
});
