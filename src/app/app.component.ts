import { Component, Injectable} from '@angular/core';
import { Router, RouterOutlet} from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { NgClass, NgStyle } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MenuComponent, NgStyle, NgClass, HttpClientModule, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

@Injectable({
  providedIn: 'root'
})

export class AppComponent {
  title = 'portfolio';
  menuOpenValue = false;
  menuOpen = false;
  legalLink = false;

  
  constructor(public translate: TranslateService, private router: Router) {
    translate.setDefaultLang('en');
    translate.use(localStorage.getItem('lang') || 'en');

    router.events.subscribe((event) => {
      if (router.url !== '/') {
        this.legalLink = true;
      } else {
        this.legalLink = false;
      }
    })
  }


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