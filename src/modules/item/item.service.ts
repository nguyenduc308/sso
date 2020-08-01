import { ItemRepository } from './item.repository';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ItemEntity } from './item.entity';

@Injectable()
export class ItemService {
    constructor(
        @InjectRepository(ItemRepository) private itemRepository: ItemRepository
    ) {}

    async getItemsByStoryId(storyId: number): Promise<ItemEntity[]> {
        return await this.itemRepository.find({
            storyId
        })
    }

}