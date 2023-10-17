"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const message_event_1 = require("./message.event");
const update_event_1 = require("./update.event");
let AppController = class AppController {
    constructor(client, updateClient) {
        this.client = client;
        this.updateClient = updateClient;
    }
    async onApplicationBootstrap() {
    }
    getHello() {
        this.client.emit('message_printed', new message_event_1.Message('A very hard task which takes two seconds..11111'));
        this.updateClient.emit('user_updated', new update_event_1.Update('User 1', 10));
        return 'Emitted Two events.';
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHello", null);
AppController = __decorate([
    common_1.Controller(),
    __param(0, common_1.Inject('HELLO_SERVICE')),
    __param(1, common_1.Inject('UPDATE_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy,
        microservices_1.ClientProxy])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map