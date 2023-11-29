import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('repostaje')
  // getRepostaje(): string[]{
  //   return this.appService.getRepostaje();
  // }


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
