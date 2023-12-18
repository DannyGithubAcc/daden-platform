import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import GraphCardComponent from './graphCard.component'; 
import CardComponent from './card.component'; 

@Component({
  standalone:true,
  selector: 'storybook-dashboard', 
  imports: [CardComponent, GraphCardComponent],
  template: `
  <div class="dashboard">
    <storybook-GraphCard class="square"
      [content]="'This is the content of the card'"
      [title]="'Title of the GraphCard'"
      [cardData]="'This is where the Card Data goes'">
    </storybook-GraphCard>
    <storybook-GraphCard class="square"
      [content]="'This is the content of the card'"
      [title]="'Title of the GraphCard'"
      [cardData]="'This is where the Card Data goes'">
    </storybook-GraphCard>
    <storybook-card
      [shape]= "'wide'">
    </storybook-card>
    <storybook-GraphCard class="square"
      [content]="'This is the content of the card'"
      [title]="'Title of the GraphCard'"
      [cardData]="'This is where the Card Data goes'">
    </storybook-GraphCard>
    <storybook-GraphCard class="square"
      [content]="'This is the content of the card'"
      [title]="'Title of the GraphCard'"
      [cardData]="'This is where the Card Data goes'">
    </storybook-GraphCard>
  </div>
  `,
  styleUrls: ['./dashboard.css'],
})
export default class DashboardComponent {

  @Input()
  ListText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sit suscipit tempore enim sequi delectus perspiciatis ipsam reprehenderit, vel in?';

  public get classes(): string[] {

    return ['storybook-dashboard'];
  }
}
