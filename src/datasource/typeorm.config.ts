import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456@Duc',
    database: 'medium',
    entities: ["dist/**/*.entity.{ts,js}"],
    synchronize: true
}