import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate, OneToMany } from "typeorm";
import * as bcrypt from 'bcryptjs';
import { UserClientEntity } from "src/user-client/user-client.entity";
import { UserScopeEntity } from "src/user-scope/user-scope.entity";

@Entity({ name: "user" })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column({nullable: true})
  password: string;

  @Column({nullable: true})
  app: string

  @Column({ name: "full_name" })
  fullName: string;

  @Column({ name: "avatar_url", nullable: true })
  avatarUrl: string;

  @Column({ nullable: true })
  bio: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    console.log(this);
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
  }

  // Relations
  @OneToMany(type => UserClientEntity, e => e.userId, {
    cascade: true
  })
  userClients: UserClientEntity[]

  @OneToMany(type => UserScopeEntity, e => e.userId)
  userScope: UserScopeEntity[]
}