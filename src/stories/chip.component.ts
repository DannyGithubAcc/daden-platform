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
  ><div class="circle"></div>
    {{ label }}
</div>`,
  styleUrls: ['./chip.css'],
})
export default class ButtonComponent {

  @Input()
  state: 'normal' | ':hover' | ':disabled' = 'normal';

  @Input()
  color: 'none' | 'white' | 'info' | 'success' | 'warning' | 'error' = 'none';

  @Input()
  label = 'Label';

  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {

    return ['storybook-chip', ` ${this.state} `, ` ${this.color} `];
  }
}
