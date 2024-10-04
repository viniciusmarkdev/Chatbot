import { Component } from '@angular/core';
import { MuseuComponent } from '../../icons/museu/museu.component';
import { ArrowLeftComponent } from '../../icons/arrow-left/arrow-left.component';
import { CommonModule } from '@angular/common';
import { Message } from '../../types/message.type';
import { MessageService } from '../../services/message.service';
import { HttpClientModule } from '@angular/common/http';
import { ChatSuggestionsComponent } from '../../components/chat-suggestions/chat-suggestions.component';
import { ChatDialogComponent } from '../../components/chat-dialog/chat-dialog.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [

    CommonModule,
    MuseuComponent,
    ArrowLeftComponent,
    HttpClientModule,
    ChatSuggestionsComponent,
    ChatDialogComponent
    
  ],

  providers:[
    HttpClientModule,
    MessageService
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {


  messages: Message[] = [];

  constructor(private service : MessageService){

  }

 

  

  updateLocalStorage(){

    localStorage.setItem("messages" , JSON.stringify(this.messages))

  }


  sendNewMessage(question: string){
    
    this.messages.push({
      type: 'request',
      message: question
    })

    this.updateLocalStorage()
    this.sendMessage(question)
  }


  sendMessage(message:String){

    this.service.send(message).subscribe({
     
      next: (body)=>{

        this.messages.push({
          type:"response",
          message: body.response

        })
      }
    })
  }
}

