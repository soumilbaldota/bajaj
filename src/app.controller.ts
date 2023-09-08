import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello()
  {
    return "you may get/post to /bfhl"
  }

  @Get('bfhl')
  getOpCode() {
    return this.appService.getOpCode();
  }
  @Post('bfhl')
  createPerson(@Body() b){
    return this.appService.create(b);
  }
}
