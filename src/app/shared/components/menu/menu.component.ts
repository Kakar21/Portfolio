import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgClass],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Input() menuOpen: boolean;

  constructor() {
    this.menuOpen = false;
  }

  scrollToSection(section: string | null) {
    if (section) {
      // this.menuOpen = false;
      document.getElementById(section)?.scrollIntoView();
    }
  }
}
