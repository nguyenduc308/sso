import { Type } from '@nestjs/common';
import {  } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'duc',
    database: 'medium',
    entities: ['dist/**/*.entity.ts'],
    synchronize: true
}