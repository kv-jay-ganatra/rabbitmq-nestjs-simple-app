import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { Transport } from '@nestjs/common/enums/transport.enum';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqp://guest:guest@localhost:5672/'
      ],
      queue: 'rabbit-mq-nest-js',
      noAck: false,
      prefetchCount: 1
    }
  });

  await app.listenAsync();
}

bootstrap();
