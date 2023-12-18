import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone:true,
  selector: 'storybook-blockquote', 
  imports: [CommonModule],
  //[bigText]="bigText" must still be added to template
  template: ` <blockquote
    [ngClass]="classes">
    "{{ content }}"
  </blockquote>`,
  styleUrls: ['./blockquote.css'],
})
export default class BlockquoteComponent {

  @Input()
  bigText = 'bigText';

  @Input()
  content = 'content';

  @Input()
  type: 'none' | 'quote' | 'small' = 'none';

  public get classes(): string[] {

    return ['storybook-blockquote', ` ${this.type} `];
  }
}
