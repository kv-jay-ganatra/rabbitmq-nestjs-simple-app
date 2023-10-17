import { ValidationPipe } from '@nestjs/common'; //new
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 
 // new
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // removes unnecessary properties in POST request body
      transform: true,
    }),
  );
await app.listen(3000);
}
bootstrap();