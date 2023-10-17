import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodMenuModule } from './food-menu/food-menu.module';
import {Food} from './food-menu/food.entity' 
import {EventEmitterModule } from '@nestjs/event-emitter' 
import { NotificationsModule } from './notifications/notifications.module';
import { NotificationsService } from './notifications/notifications.service';
@Module({
  imports: [
    TypeOrmModule.forRoot({ 
      type: 'postgres', 
      host: process.env.DB_HOST,
      port: parseInt(process.env.PORT),
      database: process.env.DB_NAME, 
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
   entities: [Food],
      synchronize: true,
    }),
    FoodMenuModule,
    EventEmitterModule.forRoot(),
    NotificationsModule 
  ],
  controllers: [AppController],
  providers: [AppService, NotificationsService],
})
export class AppModule {}