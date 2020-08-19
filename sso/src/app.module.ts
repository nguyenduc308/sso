import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './datasource/typeorm.config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.modules';
import { ValidatorModule } from './auth/validator/validator.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UserModule,
    AuthModule,
    ValidatorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
