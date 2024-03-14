import { NgClass, NgStyle } from '@angular/common';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, NgStyle, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() newOpenMenu = new EventEmitter<boolean>();
  @Input() menuOpen: boolean;

  constructor() {
    this.menuOpen = false;
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
