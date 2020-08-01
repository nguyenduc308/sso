import { Controller, Get, Param } from "@nestjs/common";
import { ItemService } from "../item/item.service";
import { ItemEntity } from "../item/item.entity";

@Controller('/stories')
export class StoryItemController {

    constructor(
        private itemService: ItemService
    ) {}

    @Get('/:id/items')
    async getItemsByStoryId(
        @Param('id') storyId: number
    ): Promise<ItemEntity[]> {
        return await this.itemService.getItemsByStoryId(storyId);
    }

}