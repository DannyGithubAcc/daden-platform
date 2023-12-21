import { IHeaderItems } from './../app/interfaces/storybook/headeritem-interface';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import ButtonComponent from './button.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone:true,
  selector: 'storybook-header', 
  imports: [CommonModule, ButtonComponent, RouterModule],
  template: `
	<header>
		<div class="wrapper">
			<div class="navbar">
				<div class="nav-left">
					<a href="/daden/" class="logo">
						<div class="logo-img">{{ BrandLetter }}</div>
						<div class="logo-text">{{ BrandName }}</div>
					</a>
				</div>
				<div class="nav-right">
					@for (item of items; track $index) {
						<a [routerLink]="[item.path]" routerLinkActive="router-link-active" >{{ item.name }}</a>
					}
					<!-- <a href="#">{{ item }}</a>
					<a href="#" class="active">{{ item }}</a>
					<a href="#">{{ item }}</a> -->
					<storybook-button class="cta-button">{{ label }}</storybook-button>
					<!-- <div class="user-img">D</div> -->
				</div>
			</div>
		</div>
	</header>`,
  styleUrls: ['./header.css'],
})
export default class HeaderComponent {

  @Input()
  BrandLetter: 'D';

  @Input()
  BrandName: 'Daden';

  @Input()
  items: IHeaderItems[];

  @Input()
  label: 'label';

  public get classes(): string[] {

    return ['storybook-header', ` ${this.BrandLetter} `, ` ${this.BrandName} `, ` ${this.items} `, ` ${this.label} `];
  }
}
