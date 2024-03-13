import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MenuComponent, NgStyle, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  menuOpenValue = false;
  menuOpen = false;

  public toggelMenu($event: any): void {
    this.menuOpenValue = $event;
    if (!$event) {
      setTimeout(() => {
        this.menuOpen = $event;
      }, 100);
    } else {
      this.menuOpen = $event;
    }

  }
}
