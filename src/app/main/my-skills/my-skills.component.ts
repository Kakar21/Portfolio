import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
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
}
