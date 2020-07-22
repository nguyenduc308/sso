import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'user'})
export class UserEntity {
    
    @PrimaryGeneratedColumn()
    id: string;
    
    @Column()
    email: string;
    
    @Column({name: 'user_type'})
    userType: string;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;
}