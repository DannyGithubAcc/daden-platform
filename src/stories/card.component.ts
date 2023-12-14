import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone:true,
  selector: 'storybook-card', 
  imports: [CommonModule],
  template: ` <div class="card card--square"
    [ngClass]="classes">
    <h3> {{ title }} </h3>
    {{ content }}
    <p class="detail"> {{ cardData }} </p>
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
