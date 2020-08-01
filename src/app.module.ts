import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './datasource/typeorm.config';

import { UserModule } from './modules/user/user.module';
import { ValidatorModule } from './modules/validator/validator.module';
import { StoryModule } from './modules/story/story.module';
import { ItemTypeModule } from './modules/item-type/item-type.module';
import { StoryItemModule } from './modules/story-item/story-item.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UserModule,
    ValidatorModule,
    StoryModule,
    ItemTypeModule,
    StoryItemModule
  ]
})
export class AppModule {}
