import { Controller, Get, Param } from "@nestjs/common";
import { ItemService } from "../item/item.service";
import { ItemEntity } from "../item/item.entity";

@Controller('/story-items')
export class StoryItemController {

    constructor(
        private itemService: ItemService
    ) {}

    @Get('/:id')
    async getItemsByStoryId(
        @Param('id') storyId: number
    ): Promise<ItemEntity[]> {
        return await this.itemService.getItemsByStoryId(storyId);
    }

}