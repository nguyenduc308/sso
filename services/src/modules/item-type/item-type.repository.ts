import { Repository, EntityRepository } from "typeorm";
import { ItemTypeEntity } from "./item-type.entity";

@EntityRepository(ItemTypeEntity)
export class ItemtypeRepository extends Repository<ItemTypeEntity> {}