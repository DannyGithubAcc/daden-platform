import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ChipPrimary } from'./Chip.stories';
import ChipComponent from './chip.component'; 

@Component({
  standalone:true,
  selector: 'storybook-carddata', 
  imports: [ChipComponent],
  template: ` 
    <div class="storybook-carddata">
      <storybook-chip
        [state]="'normal'"
        [label]="'Chip'"
        [circleColor]="'var(--red-100)'"
        (click)="onClick.emit($event)">
      </storybook-chip>
      <storybook-chip
        [state]="'normal'"
        [label]="'Chip'"
        [circleColor]="'var(--green-100)'"
        (click)="onClick.emit($event)">
      </storybook-chip>
      <storybook-chip
        [state]="'normal'"
        [label]="'Chip'"
        [circleColor]="'var(--yellow-100)'"
        (click)="onClick.emit($event)">
      </storybook-chip>
      <storybook-chip
        [state]="'normal'"
        [label]="'Chip'"
        [circleColor]="'var(--blue-100)'"
        (click)="onClick.emit($event)">
      </storybook-chip>
    </div>
  `,
  styleUrls: ['./carddata.css'],
})
export default class CardDataComponent {

  @Input()
  state: 'normal' | ':hover' | ':disabled' = 'normal';

  @Input()
  color: 'none' | 'white' | 'info' | 'success' | 'warning' | 'error' = 'none';

  @Input()
  label = 'Label';

  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {

    return ['storybook-carddata', ` ${this.state} `, ` ${this.color} `];
  }
}
