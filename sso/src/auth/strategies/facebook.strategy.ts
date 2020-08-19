import { Injectable } from "@nestjs/common";
import { use } from "passport";
import { FB_ID, FB_SECRET } from "src/config";
import { UserService } from "src/user/user.service";
import * as _ from 'lodash'
const FacebookTokenStrategy = require('passport-facebook-token');

@Injectable()
export class FacebookStrategy {
    constructor(
        private userService: UserService
    ) {
        this.init();
    }
    init() {
        use(
            new FacebookTokenStrategy({
                clientID: FB_ID,
                clientSecret: FB_SECRET,
                fbGraphVersion: 'v3.0'
            },
            async (accessToken: string, freshToken: string, profile: any, done: any) => {
                console.log(profile);
                const user = await this.userService.createUser({
                    email: profile.id,
                    avatarUrl: profile.photos[0].value,
                    fullName: profile._json.name
                })
                return done(null, user);
            })
        )
   
    }
    
}