"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.RMQ,
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
    const app2 = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.RMQ,
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
//# sourceMappingURL=main.js.map