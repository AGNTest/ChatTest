import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMessage } from 'src/app/model/message';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, OnDestroy {
  @Input() clientCreator: string = '';
  public messages: IMessage[] = [];

  $subscription?: Subscription;
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.$subscription = this.messageService
      .getMessage()
      .subscribe((message) => {
        this.messages.push(message);
      });
  }
  ngOnDestroy(): void {
    this.$subscription?.unsubscribe();
  }
}
