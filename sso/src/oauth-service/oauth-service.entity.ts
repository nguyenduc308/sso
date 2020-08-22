import { Entity, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, OneToMany } from "typeorm";
import { OauthScopeEntity } from "src/oauth-scope/oauth-scope.entity";

@Entity({name: 'oauth-service'})
export class OauthServiceEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    
    @Column({ unique: true })
    url: string

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;
    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;

    @OneToMany(type => OauthScopeEntity, e => e.oAuthServiceId, {
        cascade: true
    })
    oauthScopes: OauthScopeEntity[]
}