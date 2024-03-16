import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import {Clipboard} from '@angular/cdk/clipboard';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgClass, RouterLink, TranslateModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})

export class MenuComponent {
  @Output() newOpenMenu = new EventEmitter<boolean>();
  @Input() menuOpen: boolean;
  copied: boolean;

  constructor(private clipboard: Clipboard) {
    this.menuOpen = false;
    this.copied = false;
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

  scrollToSection(section: string | null) {
    if (section) {
      // this.menuOpen = false;
      this.openMenu(false);
      document.getElementById(section)?.scrollIntoView();
    }
  }

  copyToClipboard() {
    let mail = 'ghulammustafa@kakar.dev';
    this.clipboard.copy(mail);
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 1000);
  }
}
