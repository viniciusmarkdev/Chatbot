import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'icon-question',
  standalone: true,
  imports: [
    CommonModule,
    QuestionComponent
  ],
  templateUrl: './question.component.html',
 
})
export class QuestionComponent {

}
