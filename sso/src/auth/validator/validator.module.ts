import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MatchConstraint } from "./is-match.decorator";

@Module({
    imports: [TypeOrmModule.forFeature([])],
    providers: [MatchConstraint]
})
export class ValidatorModule {}