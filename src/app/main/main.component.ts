import { Component, HostListener, Output, inject } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ArrowComponent } from './arrow/arrow.component';
import { NgStyle } from '@angular/common';
import { ReferencesComponent } from './references/references.component';

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
    ReferencesComponent,
    NgStyle
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {


  scrollToSection(section: string | null) {
    if (section) {
      document.getElementById(section)?.scrollIntoView();
    }
  }

  
  titlesScrolled = [{ scrolled: false }, { scrolled: false }, { scrolled: false }, { scrolled: false }, { scrolled: false }];

  arrowScrolled = [{ scrolled: false }, { scrolled: false }, { scrolled: false }];


  @HostListener("document:scroll")
  arrowScrollFn() {
    if (!window.matchMedia("(pointer: fine) and (hover: hover)").matches) {
      this.titlesScrollFn();
    }
    let arrows = document.querySelectorAll('app-arrow');
    let i = -1;
    arrows.forEach((arrow) => {
      i++;
      let rect = arrow.getBoundingClientRect();
      if (rect) {
        if (rect.top < (window.innerHeight / 2)) {
          this.arrowScrolled[i].scrolled = true;
        }
      }
    });
  }


  titlesScrollFn() {
    let titles = document.querySelectorAll('#about-me, #my-skills, #portfolio, #contact');
    let i = -1;
    titles.forEach((title) => {
      i++;
      let rect = title.getBoundingClientRect();
      if (rect) {
        if (rect.top < (window.innerHeight / 2)) {
          this.titlesScrolled[i].scrolled = true;
        } else {
          this.titlesScrolled[i].scrolled = false;
        }
      }
    });
  }
}


function _calculateScrollbarWidth() {
  document.documentElement.style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.clientWidth) + "px");
}
// recalculate on resize
window.addEventListener('resize', _calculateScrollbarWidth, false);
// recalculate on dom load
document.addEventListener('DOMContentLoaded', _calculateScrollbarWidth, false); 
// recalculate on load (assets loaded as well)
window.addEventListener('load', _calculateScrollbarWidth);

