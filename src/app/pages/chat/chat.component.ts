import { Component } from '@angular/core';
import { MuseuComponent } from '../../icons/museu/museu.component';
import { ArrowLeftComponent } from '../../icons/arrow-left/arrow-left.component';
import { ChatSuggestionsComponent } from '../../components/chat-suggestions/chat-suggestions.component';
import { CommonModule } from '@angular/common';
import { Message } from '../../types/message.type';
import { ChatDialogComponent } from '../../components/chat-dialog/chat-dialog.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule,
    MuseuComponent,
    ArrowLeftComponent,
    ChatSuggestionsComponent,
    ChatDialogComponent
   
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  messages : Message []= []

  sendSuggetedQuestion(question: String){

    this.messages.push({type: 'request' , message: question
  
  })
  }
}
