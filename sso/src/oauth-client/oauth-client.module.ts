import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OauthClientRepository } from "./oauth-client.repositoty";

@Module({
    imports: [
        TypeOrmModule.forFeature([OauthClientRepository])
    ]
})
export class OauthClientModule {}