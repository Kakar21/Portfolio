import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() project = {
    name: '',
    path: '',
    number: '',
    tools: '',
    description: '',
    link: '',
    github: ''
  }; 

  @Input() index = 0;
  
}
