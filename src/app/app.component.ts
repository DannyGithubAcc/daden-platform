import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardPlainComponent } from "./cardplain/cardplain.component";
import HeaderComponent from '../stories/header.component';
import FooterComponent from '../stories/footer.component';
import { IHeaderItems } from './interfaces/storybook/headeritem-interface';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, HeaderComponent, FooterComponent, RouterOutlet, CardPlainComponent]
})
export class AppComponent {
  title = 'daden-platform';
  items: IHeaderItems[] = [
    {name: "HOME", path: "home"},
    {name: "ABOUT", path: "about"},
    {name: "INFOGRAPHICS", path: "infographic"}
  ]
}
