import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfoliodataService {

  constructor() { }

  projectlist = [
    {
      name: 'Join',
      path: 'sharkie',
      number: '01',
      tools: 'JavaScript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      link: '',
      github: 'https://github.com/Kakar21/Join'
    },
    {
      name: 'Sharkie',
      path: 'sharkie',
      number: '02',
      tools: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
      link: '',
      github: 'https://github.com/Kakar21/Sharkie'
    },
    {
      name: 'Simple CRM',
      path: 'sharkie',
      number: '03',
      tools: 'Angular | TypeScript | HTML | SCSS | Firebase',
      description: 'A very Simple Customer Relationship Management system working with CRUD functionality. [COMING SOON]',
      link: '',
      github: ''
    },
    // TODO: create project images and change the paths
    // TODO: Add live links
  ];
}
