import { Body, Controller, Get, Post } from '@nestjs/common';
import { BMIRequestDto, BMIResponseDto } from './app.dto';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('bmi')
  bmi(@Body() BMIDto: BMIRequestDto): BMIResponseDto {
    return this.appService.calculateBMI(BMIDto);
  }
}
