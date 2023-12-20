import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import DashboardComponent from './dashboard.component'; 
import HeaderComponent from './header.component'; 
import FooterComponent from './footer.component'; 

@Component({
  standalone:true,
  selector: 'storybook-infographic', 
  imports: [HeaderComponent, DashboardComponent, FooterComponent],
  template: `
  <storybook-header></storybook-header>
  <main>
    <storybook-dashboard></storybook-dashboard>
</main>
  <storybook-footer></storybook-footer>
  `,
  styleUrls: ['./infographic.css'],
})
export default class InfographicComponent {

  @Input()
  ListText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sit suscipit tempore enim sequi delectus perspiciatis ipsam reprehenderit, vel in?';

  public get classes(): string[] {

    return ['storybook-infographic'];
  }
}
