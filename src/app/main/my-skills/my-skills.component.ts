import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule, NgClass],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  lang: string;
  skills = [
    {
      path: 'angular',
      name: 'Angular'
    },
    {
      path: 'typescript',
      name: 'TypeScript'
    },
    {
      path: 'javascript',
      name: 'JavaScript'
    },
    {
      path: 'html',
      name: 'HTML'
    },
    {
      path: 'css',
      name: 'CSS'
    },
    {
      path: 'firebase',
      name: 'Firebase'
    },
    {
      path: 'git',
      name: 'Git'
    },
    {
      path: 'scrum',
      name: 'Scrum'
    },
    {
      path: 'api',
      name: 'Rest-Api'
    },
    {
      path: 'material-design',
      name: 'Material Design'
    },
  ];


  constructor(public translate: TranslateService) {
    this.lang = '';
    translate.onLangChange.subscribe((event) => {
      this.lang = event.lang;
    });
  }

  skillAni(id: string) {
    if (!window.matchMedia("(pointer: fine) and (hover: hover)").matches) {
      document.getElementById(id)?.classList.add('skillAni');
      setTimeout(() => {
        document.getElementById(id)?.classList.remove('skillAni');
      }, 600);
    }
  }
}
