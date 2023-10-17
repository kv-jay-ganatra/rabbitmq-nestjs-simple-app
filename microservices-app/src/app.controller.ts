import { Controller, Get } from "@nestjs/common";
import { Ctx, EventPattern, RmqContext } from "@nestjs/microservices";

@Controller()
export class AppController {
  constructor() {}

  @EventPattern("message_printed")
  async handleMessagePrinted(data: Record<string, unknown>) {
    var secs = data.text.toString().split(".").length - 1;

    console.log(" [x] Received %s", data.text.toString());
    setTimeout(function() {
      console.log(" [x] Done");
    }, secs * 3000);
  }

  @EventPattern("user_updated")
  async handleUserUpdated(data: Record<string, unknown>) {
 
    console.log('Name:',data.name);
    console.log('Age:',data.age);
  }


}
