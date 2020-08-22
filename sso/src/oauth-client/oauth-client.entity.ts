import { UserClientEntity } from 'src/user-client/user-client.entity';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";

@Entity({name: 'oauth_client'})
export class OauthClient extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    url: string;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;

    @OneToMany(type => UserClientEntity, e => e.oauthClientId, {
        cascade: true
    })
    userClients: UserClientEntity[];
}