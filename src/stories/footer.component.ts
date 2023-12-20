import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone:true,
  selector: 'storybook-footer', 
  imports: [CommonModule],
  template: `
  <footer>
	  <div class="wrapper">
		  <a class="feedback">feedback</a>
		  <ul class="nav">
					<a href="#">{{ item }}</a>
					<a href="#">{{ item }}</a>
					<a href="#">{{ item }}</a>
		  </ul>
		  <a class="footer-copyright">copyright</a>
	  </div>
  </footer>`,
  styleUrls: ['./footer.css'],
})
export default class FooterComponent {
  @Input()
  item: 'item';

  public get classes(): string[] {

    return ['storybook-footer', ` ${this.item} `];
  }
}
