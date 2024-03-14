import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Output() newOpenMenu = new EventEmitter<boolean>();
  @Input() menuOpen: boolean;

  constructor() {
    this.menuOpen = false;
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
}
