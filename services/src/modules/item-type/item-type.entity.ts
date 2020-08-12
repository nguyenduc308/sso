import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity({name: 'item_type'})
export class ItemTypeEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string; 

    @Column()
    label: string;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @CreateDateColumn({name: 'updated_at'})
    updatedAt: Date;
    
}