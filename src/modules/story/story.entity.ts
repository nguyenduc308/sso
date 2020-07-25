import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity({name: 'story'})
export class StoryEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'user_id'})
    userId: number;

    @Column({name: 'feature_img_url'})
    featureImgUrl: string;

    @Column()
    status: string = 'Draft';

    @Column()
    slug: string;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;
    
    @CreateDateColumn({name: 'updated_at'})
    updatedAt: Date;
}