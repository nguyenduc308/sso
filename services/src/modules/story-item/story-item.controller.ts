import { CreateItemDTO } from './../item/item.dto';
import { Controller, Get, Param, Post, Body, Patch } from "@nestjs/common";
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

    @Post('/:id/items')
    async createItem(
        @Param('id') storyId: number,
        @Body() body: any
    ): Promise<ItemEntity> {
        return await this.itemService.createItem(storyId, body);
    }

    @Patch('/:id/move_item_positions')
    async moveItemPostions(
        @Param('') storyId: number,
        @Body() data: any
    ) {
        return await this.itemService.moveItemPostions(storyId, data)
    }
}