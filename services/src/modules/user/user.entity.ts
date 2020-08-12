import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany } from "typeorm";
import { UserType } from "./user.dto";
import { StoryEntity } from "../story/story.entity";

@Entity({name: 'user'})
export class UserEntity extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: string;
    
    @Column()
    email: string;
    
    @Column({name: 'user_type'})
    userType: UserType = UserType.Member;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date = new Date();

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date = new Date();

    @OneToMany(type => StoryEntity, story => story.userId, {
        cascade: true, 
    }) 
    stories: StoryEntity[]

}