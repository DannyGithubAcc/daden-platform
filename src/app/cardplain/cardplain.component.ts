import { Component, signal } from '@angular/core';
import DatacardComponent from '../../stories/datacard.component';

@Component({
  selector: 'app-card-plain',
  standalone: true,
  imports: [DatacardComponent],
  templateUrl: './cardplain.component.html',
  styleUrl: './cardplain.component.scss',
})
export class CardPlainComponent {
    content = signal("hoi");
    title = signal("Title hier");
    cardData = signal("formdata here");
    classes: [] = [];

}
