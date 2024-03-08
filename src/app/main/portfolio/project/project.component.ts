import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() project = {
    name: 'Sharkie',
    path: 'sharkie',
    number: '01'
  }; 

  @Input() index = 0;
  
}
