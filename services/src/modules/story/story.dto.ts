import { IsNotEmpty, IsEmpty } from "class-validator";

export enum StoryStatus {
    DRAFT = 'DRAFT',
    PUBLISHED = 'PUBLISHED',
    MODIFIED = 'MODIFIED'
}

export class CreateStoryDTO {
    @IsNotEmpty()
    userId: number;

    @IsNotEmpty()
    title: string;

    featureImgUrl: string;
}

export class ReplaceStoryDTO {
    @IsEmpty()
    userId: number;
    
    @IsNotEmpty()
    title: string;

    featureImgUrl: string;
}

export class UpdateStoryDTO {
    @IsEmpty()
    userId: number;
    
    @IsNotEmpty()
    title: string;

    featureImgUrl: string;
}