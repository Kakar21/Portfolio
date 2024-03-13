import { NgClass, NgStyle } from '@angular/common';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() newOpenMenu = new EventEmitter<boolean>();
  open = false;



  public openMenu(value: boolean) {
    this.open = value;
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
