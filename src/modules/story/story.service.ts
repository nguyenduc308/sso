import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import * as _ from 'lodash';
import { StoryRepository } from "./story.repository";
import { StoryEntity } from "./story.entity";
import { CreateStoryDTO, UpdateStoryDTO, ReplaceStoryDTO } from "./story.dto";

@Injectable()
export class StoryService {
    constructor(
        @InjectRepository(StoryRepository) private storyRepository: StoryRepository,
    ) {}

    async getStories(): Promise<StoryEntity[]> {
        return await this.storyRepository.find();
    }

    async getStoryById(id: number): Promise<StoryEntity> {
        const foundStory = this.storyRepository.findOne(id)
        return foundStory;
    }

    async createStory(story: CreateStoryDTO): Promise<StoryEntity> {
        const newStory = this.storyRepository.create(story);
        return await newStory.save();
    }

    async updateStoryById(id: number, body: UpdateStoryDTO): Promise<StoryEntity> {
        let foundStory = await this.getStoryById(id);
        foundStory = _.assign(foundStory, body);
        await foundStory.save();
        return foundStory;
    }

    async replaceStoryById(id: number, body: ReplaceStoryDTO): Promise<StoryEntity> {
        let foundStory = await this.getStoryById(id);
        const putArr = ['title', 'featureImgUrl']
        putArr.forEach(key => foundStory[key] = body[key])
        await foundStory.save();
        return foundStory;
    }

    async deleteStoryById(id:number): Promise<StoryEntity>  {
        const foundStory = this.getStoryById(id);
        await this.storyRepository.delete(id);
        return foundStory;
    }
}