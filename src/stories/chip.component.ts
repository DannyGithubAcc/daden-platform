import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  standalone:true,
  selector: 'storybook-chip', 
  imports: [CommonModule],
  template: ` <div
    class="chip"
    type="button"
    (click)="onClick.emit($event)"
    [ngClass]="classes"
  ><div class="circle"
      [style.backgroundColor]="circleColor"></div>
    {{ label }}
</div>`,
  styleUrls: ['./chip.css'],
})
export default class ChipComponent {

  @Input()
  state: 'normal' | ':hover' | ':disabled' = 'normal';

  @Input()
  label = 'Label';

  @Input()
  circleColor: string = ''; // New input for the color of the circle

  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {

    return ['storybook-chip', ` ${this.state} `];
  }
}
