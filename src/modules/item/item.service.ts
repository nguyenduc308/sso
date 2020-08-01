import { Injectable } from "@nestjs/common";
import * as _ from 'lodash';

import { CreateItemDTO } from './item.dto';
import { ItemRepository } from './item.repository';
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

    async createItem(storyId: number, data: CreateItemDTO): Promise<ItemEntity> {
        const displayIndex: number = (await this.getItemsByStoryId(storyId)).length;
        const newItem = this.itemRepository.create({
                                ...data,
                                storyId,
                                displayIndex
                            })
        await newItem.save()
        return newItem;
    }

    async moveItemPostions(storyId, data: any): Promise<any> {
        const newItemPositions = _.get(data, 'items', []);

        // for (const itemPosition of newItemPositions) {
        //     // {id: 1, displayIndex: 2}
        //     const foundItem = await this.itemRepository.findOne(itemPosition.id);
        //     foundItem.displayIndex = itemPosition.displayIndex;
        //     await foundItem.save;
        // }
        const items = await this.itemRepository.find({storyId});

        const itemsArr = items.map(item => {
            const itemPosition = _.find(newItemPositions, itemPosition => {
                return itemPosition.id = item.id;
            })

            item.displayIndex = itemPosition.displayIndex;
            return item.save();
        })
        const res = await Promise.all(itemsArr);

        return {
            message: 'Update position successfully',
            items: _.pick(res, ['id', 'displayIndex'])
        }
    }
}