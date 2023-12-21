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
        [label]="'lepel'"
        [circleColor]="'var(--red-100)'"
        (click)="onClick.emit($event)">
      </storybook-chip>
      <storybook-chip
        [circleColor]="'var(--green-100)'"
        (click)="onClick.emit($event)">
      </storybook-chip>
      <storybook-chip
        [circleColor]="'var(--yellow-100)'"
        (click)="onClick.emit($event)">
      </storybook-chip>
      <storybook-chip
        [circleColor]="'var(--blue-100)'"
        (click)="onClick.emit($event)">
      </storybook-chip>
    </div>
  `,
  styleUrls: ['./carddata.css'],
})
export default class CardDataComponent {@Input()
  label = 'Label';

  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {

    return ['storybook-carddata'];
  }
}
