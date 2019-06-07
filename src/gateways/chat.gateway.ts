import { Logger } from '@nestjs/common';
import { OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ namespace: '/chat' })
export class ChatGateway implements OnGatewayInit {

  private users = {};

  handleConnection(client: any, ...args: any[]) {
    this.users[client.id] = {
      client,
      name: '',
    };
    this.sendUsers();
  }

  handleDisconnect(client: any) {
    delete this.users[client.id];
    this.sendUsers();
  }

  @WebSocketServer() wss: Server;

  private logger: Logger = new Logger('ChatGateway');

  afterInit(server: any) {
    this.logger.log('Initialized!');
  }

  @SubscribeMessage('chatToServer')
  handleMessage(client: Socket, message: { sender: string, message: string }) {
    this.wss.emit('chatToClient', message);
  }

  @SubscribeMessage('login')
  handleLogin(client: Socket, message: { sender: string, message: string }) {
    this.users[client.id].name = message.sender;
    this.sendUsers();
  }

  sendUsers() {
    this.wss.emit('users', Object.values(this.users).map((v: any) => v.name).filter(u => !!u));
  }
}
