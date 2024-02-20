import { Component } from '@angular/core';
import { ArrowRightComponent } from '../../icon/arrow-right/arrow-right.component';
import { SparkleComponent } from '../../sparkle/sparkle.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ArrowRightComponent,
    SparkleComponent
  
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
