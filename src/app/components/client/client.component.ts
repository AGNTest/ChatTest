import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  @Input() name: string = '';
  public message = '';
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {}

  validate() {
    this.messageService.sendMessage({
      author: this.name,
      content: this.message,
      created: new Date(),
    });
    this.message = '';
  }
}
