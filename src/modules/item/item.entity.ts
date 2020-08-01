import { Entity, BaseEntity, PrimaryGeneratedColumn, JoinColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { type } from "os";
import { StoryEntity } from "../story/story.entity";

@Entity({name: 'item'})
export class ItemEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => StoryEntity, story => story.items, {
        onDelete: 'CASCADE'
    })

    @JoinColumn({name: 'story_id'})
    storyId: number;

    @Column({name: 'item_type_id'})
    itemTypeId: number;

    @Column()
    content: string;

    @Column({name: 'display_index'})
    displayIndex: number

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @CreateDateColumn({name: 'updated_at'})
    updatedAt: Date;
}