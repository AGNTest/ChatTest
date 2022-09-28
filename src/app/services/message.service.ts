import { EventEmitter, Injectable } from '@angular/core';

import { IMessage } from '../model/message';

@Injectable()
export class MessageService {
  private receiveMessage: EventEmitter<IMessage> = new EventEmitter<IMessage>();

  public getMessage(): EventEmitter<IMessage> {
    return this.receiveMessage;
  }

  public sendMessage(message: IMessage) {
    this.receiveMessage.emit(message);
  }
}
