import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Transport } from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ["amqp://guest:guest@localhost:5672/"],
      queue: "task_queue1",
      queueOptions: {
        durable: true,
        arguments: {
          "x-max-priority": 2,
        },
        prefetchCount: 1,
        persistent: true,
      },
    },
  });
  const app2 = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ["amqp://guest:guest@localhost:5672/"],
      queue: "update_queue",
      queueOptions: {
        durable: true,
        arguments: {
          "x-max-priority": 2,
        },
        prefetchCount: 1,
        persistent: true,
      },
    },
  });
  await app.listen(() => console.log("Microservice 1  is listening"));
  await app2.listen(() => console.log("Microservice 2 is listening"));
}
bootstrap();
