import { Controller, Get, Inject } from "@nestjs/common";
import { AppService } from "./app.service";
import { ClientProxy } from "@nestjs/microservices";
import { Message } from "./message.event";
import { Update } from "./update.event";

@Controller()
export class AppController {
  constructor(
    @Inject("HELLO_SERVICE") private readonly client: ClientProxy,
    @Inject("UPDATE_SERVICE") private readonly updateClient: ClientProxy
  ) {}

  async onApplicationBootstrap() {
    //await this.client.connect();
  }

  @Get()
  getHello() {
    this.client.emit<any>(
      "message_printed",
      new Message("A very hard task which takes two seconds..")
    );
    this.updateClient.emit<any>("user_updated", new Update("User 1", 10));

    return "Emitted Two events.";
  }
}
