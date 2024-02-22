import { Component , Input } from '@angular/core';
import { Message } from '../../types/message.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'chat-response',
  standalone: true,
  imports: [

    ChatResponseComponent,
    CommonModule

  ],
  templateUrl: './chat-response.component.html',
  styleUrls: ['./chat-response.component.scss']
})
export class ChatResponseComponent {

  @Input() message !: Message;

}
