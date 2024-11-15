import { NgClass, NgStyle } from '@angular/common';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, NgStyle, RouterLink, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() newOpenMenu = new EventEmitter<boolean>();
  @Input() menuOpen: boolean;
  @Input() legalLink: boolean;

  lang = localStorage.getItem('lang') || 'de';

  
  constructor(private translateService: TranslateService) {
    this.menuOpen = false;
    this.legalLink = false;
  }


  changeLang(langCode: string) {
    this.lang = langCode;
    localStorage.setItem('lang', langCode);

    this.translateService.use(langCode);
  }


  scrollToSection(section: string | null) {
    if (section) {
      document.getElementById(section)?.scrollIntoView();
    }
  }


  public openMenu(value: boolean) {
    this.menuOpen = value;
    this.newOpenMenu.emit(value);

    if (value) {
      document.body.classList.add('overflow-h');
    } else {
      setTimeout(() => {
        document.body.classList.remove('overflow-h');
      }, 100);
    }
  }
}
