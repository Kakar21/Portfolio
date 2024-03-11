import { Component, HostListener } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ArrowComponent } from './arrow/arrow.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeroComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ContactComponent,
    ArrowComponent,
    NgStyle
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  scrolled = [{ scrolled: false }, { scrolled: false }, { scrolled: false}];

  @HostListener("document:scroll")
  scrollFn() {
    let arrows = document.querySelectorAll('app-arrow');
    let i = -1;
    arrows.forEach( (arrow) => {
      i++
      let rect = arrow.getBoundingClientRect();
      if (rect) {
        if (rect.top < (window.innerHeight / 2))  {
          this.scrolled[i].scrolled = true;
        }
      }
    })
  }
}


