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

        let items = await this.itemRepository.find({storyId});

        const itemsArr = items.map(item => {

            const itemPosition = data.items.find((itemData: any) => itemData.id === item.id);

            if  (itemPosition) {
                item.displayIndex = itemPosition.displayIndex;
            }
            return item.save();
        });

        const newItems = await Promise.all(itemsArr).then(items => items.map(({id, displayIndex}) => ({id, displayIndex})));

        return {
            itemsBefore: items.map(({id, displayIndex}) => ({id, displayIndex})),
            items: newItems
        }
    }
}