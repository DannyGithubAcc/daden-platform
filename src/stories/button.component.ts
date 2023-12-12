import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  standalone:true,
  selector: 'storybook-button', 
  imports: [CommonModule],
  template: ` <button
    type="button"
    (click)="onClick.emit($event)"
    [ngClass]="classes"
  >
    {{ label }}
  </button>`,
  styleUrls: ['./button.css'],
})
export default class ButtonComponent {

  @Input()
  hierarchy: 'primary' | 'secondary' | 'ghost' = 'primary';

  @Input()
  color: 'none' | 'white' | 'info' | 'success' | 'warning' | 'error' = 'none';

  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  @Input()
  label = 'Button';

  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {

    return ['storybook-button', ` ${this.size} `, ` ${this.color} `, ` ${this.hierarchy} `];
  }
}
