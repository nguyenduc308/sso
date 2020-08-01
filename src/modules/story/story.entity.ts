import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, BeforeInsert, BeforeUpdate, ManyToMany, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { cleanAccents } from '../../utils/stringTranform';
import * as _ from 'lodash';
import { StoryStatus } from "./story.dto";
import { UserEntity } from "../user/user.entity";
import { type } from "os";
import { ItemEntity } from "../item/item.entity";

@Entity({name: 'story'})
export class StoryEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => UserEntity, user => user.stories, {
        // onDelete: 'CASCADE' // All story will be deleted when user be deleted
        onDelete: 'SET NULL' 
    })

    @OneToMany(type => ItemEntity, item => item.storyId, {
        cascade: true
    })
    items: ItemEntity[]

    @JoinColumn({name: 'user_id'})
    userId: number;

    @Column()
    title: string;

    @Column({name: 'feature_img_url'})
    featureImgUrl: string;

    @Column()
    status: string = StoryStatus.DRAFT;

    @Column()
    slug: string;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;
    
    @CreateDateColumn({name: 'updated_at'})
    updatedAt: Date;

    @BeforeInsert()
    @BeforeUpdate()
    generateSlugFromTitle() {
        this.slug = _.chain(this.title)
                     .thru(title => cleanAccents(title))
                     .toLower()
                     .split(' ')
                     .concat(Date.now().toString())
                     .join('-')
                     .value();
    }
}