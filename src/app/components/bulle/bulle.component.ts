import { Component, Input, OnInit } from '@angular/core';
import { IMessage } from 'src/app/model/message';

@Component({
  selector: 'app-bulle',
  templateUrl: './bulle.component.html',
  styleUrls: ['./bulle.component.scss'],
})
export class BulleComponent implements OnInit {
  @Input() message?: IMessage;
  @Input() clientCreator: string = '';
  constructor() {}

  ngOnInit(): void {}

  isCreator() {
    return this.clientCreator === this.message?.author;
  }

  getDate(date?: Date): string {
    return date
      ? `Le ${date.toLocaleDateString()} à ${date.toLocaleTimeString()}`
      : '';
  }
}
