import { Entity, BaseEntity, PrimaryGeneratedColumn, JoinColumn, Column, CreateDateColumn } from "typeorm";

@Entity({name: 'item'})
export class ItemEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

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