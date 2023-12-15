import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardDataPrimary } from'./Carddata.stories';
import CardDataComponent from './carddata.component'; 

@Component({
  standalone:true,
  selector: 'storybook-card', 
  imports: [CardDataComponent],
  template: ` 
    <div class="card card--square">
      <h3> {{ title }} </h3>
      <div class="card-content">{{ content }}</div>
      <storybook-carddata
        [state]="'normal'"
        [color]="'none'"
        [label]="'label'">
      </storybook-carddata>
    </div>`,
  styleUrls: ['./card.css'],
})
export default class CardComponent {

  @Input()
  content = 'content';

  @Input()
  title = 'Card Title';

  @Input()
  cardData = 'Card Data';

  public get classes(): string[] {

    return ['storybook-card'];
  }
}
