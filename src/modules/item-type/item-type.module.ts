import { Module } from '@nestjs/common';
import { ItemTypeService } from './item-type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemTypeEntity } from './item-type.entity';
import { ItemTypeController } from './item-type.controller';
import { ItemtypeRepository } from './item-type.repository';

@Module({
    imports: [TypeOrmModule.forFeature([ItemtypeRepository])],
    providers: [ItemTypeService],
    controllers: [ItemTypeController]
})
export class ItemTypeModule {}