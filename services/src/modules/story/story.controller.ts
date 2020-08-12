import { Controller, Get, Post, Body, Param, Patch, Put, Delete, NotFoundException } from "@nestjs/common";
import { StoryService } from "./story.service";
import { StoryEntity } from "./story.entity";
import { CreateStoryDTO, UpdateStoryDTO, ReplaceStoryDTO } from "./story.dto";

@Controller('/stories')
export class StoryController {
    constructor(
        private storyService: StoryService
    ) {}

    @Get()
    async getStories(): Promise<StoryEntity[]> {
        return await this.storyService.getStories();
        
    }
    
    @Get('/:id')
    async getStoryById(@Param('id') id: number): Promise<StoryEntity> {
        const foundStory = await this.storyService.getStoryById(id);
        if(!foundStory) {
            throw new NotFoundException('Story not found');
        }
        return foundStory;
    }

    @Post() 
    async createStory(@Body() body: CreateStoryDTO): Promise<StoryEntity> {
        return await this.storyService.createStory(body);
    }

    @Patch('/:id')
    async updateStoryById(
        @Body() body: UpdateStoryDTO, 
        @Param('id') id: number
    ): Promise<StoryEntity> {
        return await this.storyService.updateStoryById(id, body);
    }

    @Put('/:id')
    async replaceStoryById(
        @Body() body: ReplaceStoryDTO, 
        @Param('id') id: number
    ): Promise<StoryEntity> {
        return await this.storyService.replaceStoryById(id, body);
    }

    @Delete('/:id')
    async deleteStoryById(
        @Param('id') id: number
    ): Promise<StoryEntity> {
        return this.storyService.deleteStoryById(id);
    }
}