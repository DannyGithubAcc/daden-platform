import { Component } from '@angular/core';
import DatacardComponent from '../../stories/datacard.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DatacardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
