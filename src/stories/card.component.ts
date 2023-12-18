import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardDataPrimary } from'./Carddata.stories';
import CardDataComponent from './carddata.component'; 

@Component({
  standalone:true,
  selector: 'storybook-card', 
  imports: [CommonModule, CardDataComponent],
  template: ` 
    <div class="card card--square"
    [ngClass]="classes">
    <div class="card-content">{{ content }}</div>
    </div>`,
  styleUrls: ['./card.css'],
})
export default class CardComponent {

  @Input()
  shape: 'square' | 'high' | 'wide' | 'full-width' = 'square';

  @Input()
  content = 'content';

  public get classes(): string[] {

    return ['storybook-card', ` ${this.shape} `];
  }
}
