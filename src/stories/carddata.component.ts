import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';
import { ChipPrimary } from'./Chip.stories';
import ChipComponent from './chip.component'; 

@Component({
  standalone:true,
  selector: 'storybook-carddata', 
  imports: [ChipComponent],
  template: ` 
    <div class="storybook-carddata">
      <storybook-chip
        *ngFor="let chip of chips"
        label="chip.label"
        circleColor="chip.circleColor"
        (click)="onClick.emit($event)"
      >
      </storybook-chip>
    </div>
  `,
  styleUrls: ['./carddata.css'],
})
export default class CardDataComponent {
  
  @Input()
  chips: { 
    label: string; 
    circleColor: string 
  }[] = [];

  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {

    return ['storybook-carddata'];
  }
}
