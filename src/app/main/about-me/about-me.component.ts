import { Component, HostListener } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {


  scrollToSection(section: string | null) {
    if (section) {
      document.getElementById(section)?.scrollIntoView();
    }
  }

  portraitScrolled = false;

  
  @HostListener("document:scroll")
  titlesScrollFn() {
    if ((!window.matchMedia("(pointer: fine) and (hover: hover)").matches)) {
      let portrait = document.querySelectorAll('.portrait');
      let rect = portrait[0].getBoundingClientRect();
      if (rect) {
        if (rect.bottom < window.innerHeight - 10) {
          this.portraitScrolled = true;
        } else {
          this.portraitScrolled = false;
        }
      }
    }
  }
}
