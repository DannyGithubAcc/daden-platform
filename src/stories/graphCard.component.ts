import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import CardComponent from './card.component';
import CardDataComponent from './carddata.component'; 

@Component({
  standalone:true,
  selector: 'storybook-GraphCard', 
  imports: [CardDataComponent, CardComponent],
  template: ` 
    <div>
      <storybook-card>
      <h3> {{ title }} </h3>
      <div class="card-content">{{ content }}</div>
      <storybook-carddata>
      </storybook-carddata>
      </storybook-card>
    </div>`,
  styleUrls: ['./graphcard.css'],
})


// [label]="'label'"

export default class GraphCardComponent {

  @Input()
  content = 'content';

  @Input()
  title = 'Card Title';

  @Input()
  cardData = 'Card Data';

  public get classes(): string[] {

    return ['storybook-graphcard'];
  }
}
