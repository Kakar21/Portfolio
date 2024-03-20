import { Component, HostListener, inject } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { PortfoliodataService } from './portfoliodata.service';
import { NgStyle } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent, NgStyle, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  portfoliodata = inject(PortfoliodataService);

  projectScrolled = [{ scrolled: false }, { scrolled: false }, { scrolled: false }, { scrolled: false }];

  
  @HostListener("document:scroll")
  arrowScrollFn() {
    if (!window.matchMedia("(pointer: fine) and (hover: hover)").matches) {
      let projects = document.querySelectorAll('app-project');
      let i = -1;
      projects.forEach((project) => {
        i++;
        let rect = project.getBoundingClientRect();
        if (rect) {
          if (rect.top < (window.innerHeight / 2)) {
            this.projectScrolled[i].scrolled = true;
          } else {
            this.projectScrolled[i].scrolled = false;
          }
        }
      });
    }
  }
}
