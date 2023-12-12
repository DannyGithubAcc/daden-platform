import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  standalone:true,
  selector: 'storybook-typography', 
  imports: [CommonModule],
  template: `<h3>Text weights</h3>
  <h4>Normal</h4>  
  <p class="font-weight-normal">{{ textWeight }}</p>
  <h4>Bold</h4>  
  <p class="font-weight-bold"> {{ textWeight }}</p>
  <h4>Light</h4>  
  <p class="font-weight-light"> {{ textWeight }}</p>
  <div class="hl"></div>
  <h3>Text types</h3>
  <h1>This is heading 1</h1>
  <h2>This is heading 2</h2>
  <h3>This is heading 3</h3>
  <h4>This is heading 4</h4>
  <h5>This is heading 5</h5>
  <h6>This is heading 6</h6>
  <p class="opening">This is an opening paragraph.</p>
  <p>This is a normal paragraph.</p>
  <div class="hl"></div>
  <h3>Expo</h3>
  <h1>The title of an interesting article</h1>
  <p class="opening">This is an opening paragraph. It is bold so it stands out more. An opening is usually used to outline the article or summarize what a reader might find in the article. An bold, opening-styled paragraph can also be used as a closing or concluding paragraph. These paragraphs are usually 3 to 6 lines in length.</p>
  <p>Normal paragraphs have normal weight. There is a 1 line space between paragraphs, so they stand out. </p>
  <h2>Subtitle: a chapter detailing the intricacies of typography</h2>
  <p class="no-spacing">You can apply a no-spacing class to set this blank space between paragraphs to zero.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt repellat, rerum necessitatibus facere perspiciatis fuga pariatur recusandae natus iusto ratione esse vel nobis dolorem non possimus assumenda suscipit itaque, nisi deleniti placeat. Atque, aspernatur tenetur eum voluptatem eligendi iure cumque sapiente voluptatum velit alias fuga iusto est commodi soluta incidunt adipisci, quas repellendus, repellat quaerat rem voluptate! Id similique sint laborum porro aliquam cum corrupti minima pariatur harum, doloribus, architecto nisi voluptatibus dolor fugit mollitia. Explicabo, dolore libero veniam alias possimus odio totam neque. Alias, facere eum sint quas nam accusantium officia doloribus, commodi molestiae illum autem voluptate exercitationem dolorum!</p>
  <h3>Lorem ipsum, dolor sit amet</h3>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
  <p>Eos soluta quam dignissimos debitis, minus officia delectus eum eligendi perspiciatis quaerat!</p>
  <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, qui.</h4>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugit at earum laboriosam tempora eveniet debitis et, officia similique nemo.</p>
  <h5>Title</h5>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugit at earum laboriosam tempora eveniet debitis et, officia similique nemo.</p>
  <p>Dit is hoe een <a href="http://#" target="_blank" rel="noopener noreferrer">link</a> er uit ziet.</p>
  <p>Dit is hoe een <a href="http://#" target="_blank" rel="noopener noreferrer">link</a> er uit ziet.</p>
  <h6>Title</h6>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugit at earum laboriosam tempora eveniet debitis et, officia similique nemo.</p>
  <p class="info">This is an informing text.</p>
  <p class="error">This is a danger or error text.</p>
  <p class="warning">This is a warning or caution text.</p>
  <p class="success">This is a success text.</p>`,
  styleUrls: ['./typography.css'],
})
export default class TypographyComponent {

  @Input()
  textWeight = 'textWeight';

  public get classes(): string[] {

    return ['storybook-typography'];
  }
}
