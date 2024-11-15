import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgStyle, NgClass, TranslateModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() project = {
    name: '',
    path: '',
    number: '',
    tools: '',
    link: '',
    githubFrontend: '',
    githubBackend: ''
  }; 

  @Input() index = 0;
  
}
