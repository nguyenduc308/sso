import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from "@nestjs/passport";
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller("/auth")
export class AuthController {
  constructor(
    private authService: AuthService
  ) { }

  @UseGuards(LocalAuthGuard)
  @Post("/login")
  async login(@Request() req) {
    return this.authService.login(req.user)
  }

  @UseGuards(JwtAuthGuard)
  @Get("/me")
  async getMe(@Request() req) {
    return req.user;
  }
  @UseGuards(AuthGuard('facebook-token'))
  @Get('/fb')
  async getFacebookToken(@Request() req) {
    console.log(req)
  }
}