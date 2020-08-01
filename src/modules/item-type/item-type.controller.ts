import { Controller, Get } from "@nestjs/common";
import { ItemTypeEntity } from "./item-type.entity";
import { ItemTypeService } from "./item-type.service";

@Controller('/item-types')
export class ItemTypeController {
    constructor(
        private itemTypeService: ItemTypeService
    ) {}

    @Get()
    async getItemTypes(): Promise<ItemTypeEntity[]> {
        return await this.itemTypeService.getItemTypes();
    }

}