import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone:true,
  selector: 'storybook-datacard', 
  template: ` 
    <div class="card square">
      <h3> {{ title }} </h3>
      <div class="card-content">{{ content }}</div>
      <div class="card-data">{{ cardData }}</div>
    </div>`,
  styleUrls: ['./datacard.css'],
})
export default class DatacardComponent {

  @Input()
  content = 'content';

  @Input()
  title = 'Card Title';

  @Input()
  cardData = 'Card Data';

  public get classes(): string[] {

    return ['storybook-datacard'];
  }
}
