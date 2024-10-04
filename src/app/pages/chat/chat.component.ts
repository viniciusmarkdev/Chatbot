import { Component } from '@angular/core';
import { MuseuComponent } from '../../icons/museu/museu.component';
import { ArrowLeftComponent } from '../../icons/arrow-left/arrow-left.component';
import { CommonModule } from '@angular/common';
import { Message } from '../../types/message.type';
import { MessageService } from '../../services/message.service';
import { HttpClientModule } from '@angular/common/http';
import { ChatSuggestionsComponent } from '../../components/chat-suggestions/chat-suggestions.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule,
    MuseuComponent,
    ArrowLeftComponent,
    HttpClientModule,
    ChatSuggestionsComponent
  ],

  providers:[
    HttpClientModule,
    MessageService
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  constructor(private service : MessageService){

  }
  messages : Message []= JSON.parse(localStorage.getItem("messages")??"[]")

  updateLocalStorage(){

    localStorage.setItem("messages" , JSON.stringify(this.messages))

  }

  sendSuggetedQuestion(question: String){

    this.messages.push({type: 'request' , message: question
  
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

