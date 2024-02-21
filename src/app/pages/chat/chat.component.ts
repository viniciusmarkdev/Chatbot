import { Component } from '@angular/core';
import { MuseuComponent } from '../../icons/museu/museu.component';
import { ArrowLeftComponent } from '../../icons/arrow-left/arrow-left.component';
import { ChatSuggestionsComponent } from '../../components/chat-suggestions/chat-suggestions.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [

    MuseuComponent,
    ArrowLeftComponent,
    ChatSuggestionsComponent
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  initialQuestions:  string[] = [

    "Qual o valor para entrar no museu?",
    "Quand o museu está aberto ?"
    
  ]


  initialCuriosity:  string[] = [

    "Quem era o prefeito na época da criação ?",
    "Quantos cômodos existem no  museu  ?",
    "Quantas peças estão exibidas no  museu  ?"
    
  ]

  initialHistory:  string[] = [

    "Quando o museu foi criado  ?",
    "Qual é o estilo arquitetônico do prédio ?",
    "Quem foi o arquiteto  do prédio?"
    
  ]

}
