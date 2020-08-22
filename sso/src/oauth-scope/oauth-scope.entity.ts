import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { UserScopeEntity } from "src/user-scope/user-scope.entity";
import { OauthServiceEntity } from "src/oauth-service/oauth-service.entity";

@Entity({name: 'oauth_scope'})
export class  OauthScopeEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => OauthServiceEntity, e =>  e.oauthScopes)
    @JoinColumn({name: 'oauth_service_id'})
    oAuthServiceId: number;

    @Column()
    scope: string;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;

    @OneToMany(type => UserScopeEntity, e => e.oauthScopeId, {
        cascade: true
    })
    userScopes: UserScopeEntity[];
}