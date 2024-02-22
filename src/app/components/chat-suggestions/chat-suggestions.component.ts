import { CommonModule } from '@angular/common';
import { QuestionComponent } from '../../icons/question/question.component';
import { CuriosityComponent } from '../../icons/curiosity/curiosity.component';
import { HistoryComponent } from '../../icons/history/history.component';
import {Component , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'chat-suggestions',
  standalone: true,
  imports: [
    CommonModule,
    QuestionComponent,
    CuriosityComponent,
     HistoryComponent
  ],
  templateUrl: './chat-suggestions.component.html',
 
})
export class ChatSuggestionsComponent {

    @Output() questionSelected= new EventEmitter<String>();

  suggestionTopics = [

    {

      title:"Dúvidas",
      icon: 'doubt',
      questions:[

        "Qual o valor para entrar no museu?",
        "Quando o museu está aberto ?",

      ]

    },

    {

      title:"Curiosidades",
      icon: 'curiosity',
      questions:[

      "Quem era o prefeito na época da criação ?",
      "Quantos cômodos existem no  museu  ?",
      "Quantas peças estão exibidas no  museu  ?"

      ]

    },
    {

      title:"Historia",
      icon: 'history',
      questions:[

      
 "Quando o museu foi criado  ?",
 "Qual é o estilo arquitetônico do prédio ?",
 "Quem foi o arquiteto  do prédio?"


      ]

    },


  ]
  

  selectQuestion(value: string){

    this.questionSelected.emit(value)

  }

}


