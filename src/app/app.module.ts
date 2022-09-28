import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientComponent } from './components/client/client.component';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { MessageService } from './services/message.service';
import { BulleComponent } from './components/bulle/bulle.component';

@NgModule({
  declarations: [AppComponent, ClientComponent, ChatComponent, BulleComponent],
  imports: [BrowserModule, FormsModule],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
