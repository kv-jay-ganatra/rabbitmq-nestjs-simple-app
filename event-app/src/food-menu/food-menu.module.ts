import { Module } from '@nestjs/common';
import { FoodMenuService } from './food-menu.service';
import { FoodMenuController } from './food-menu.controller';
import {TypeOrmModule} from '@nestjs/typeorm' // new
import {Food} from './food.entity' //new

@Module({
 //new
 imports: [
  TypeOrmModule.forFeature([Food])
],
providers: [FoodMenuService],
  controllers: [FoodMenuController]
})
export class FoodMenuModule {}

