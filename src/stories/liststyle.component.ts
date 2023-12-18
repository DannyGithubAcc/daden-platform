import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  standalone:true,
  selector: 'storybook-liststyle', 
  imports: [CommonModule],
  template: `
  <p>Unordered list title:</p>
  <ul>
    <li>{{ ListText }}</li>
    <li>{{ ListText }}</li>
    <li>{{ ListText }}</li>
  </ul>
  <p>Ordered list title:</p>
  <ol>
    <li>{{ ListText }}</li>
    <li>{{ ListText }}</li>
    <li>{{ ListText }}</li>
  </ol>  
  `,
  styleUrls: ['./liststyle.css'],
})
export default class ListstyleComponent {

  @Input()
  ListText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sit suscipit tempore enim sequi delectus perspiciatis ipsam reprehenderit, vel in?';

  public get classes(): string[] {

    return ['storybook-liststyle'];
  }
}
