import { ClientProxy } from '@nestjs/microservices';
export declare class AppController {
    private readonly client;
    private readonly updateClient;
    constructor(client: ClientProxy, updateClient: ClientProxy);
    onApplicationBootstrap(): Promise<void>;
    getHello(): string;
}
