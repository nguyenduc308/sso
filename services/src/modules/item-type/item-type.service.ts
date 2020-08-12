import { Injectable, OnModuleInit } from "@nestjs/common";

import { ItemTypeEntity } from "./item-type.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { ItemtypeRepository } from "./item-type.repository";
import { getConnection } from "typeorm";
import { queries } from '../../../sql/insert-item-types-default';
@Injectable()
export class ItemTypeService implements OnModuleInit {
    constructor(
        @InjectRepository(ItemtypeRepository) private itemTypeRepositoy: ItemtypeRepository
    ){}

   async onModuleInit() {
        const queriesSQL = queries
                            .replace(/(\r\n|\n|\r)/gm, ' ') //remove new line
                            .replace(/\s+/g, ' ') //axcess white space
                            .split(';')
                            .filter(Boolean)

        const queriesConnection = queriesSQL.map(query => getConnection().query(query));

        await Promise.all(queriesConnection);                  
    }   

    async getItemTypes(): Promise<ItemTypeEntity[]> {
        return await this.itemTypeRepositoy.find();
    }
    
}