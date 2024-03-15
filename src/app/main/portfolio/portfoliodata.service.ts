import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfoliodataService {

  constructor() { }

  projectlist = [
    {
      name: 'Join',
      path: 'join',
      number: '01',
      tools: 'JavaScript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      link: 'https://join.kakar.dev/',
      github: 'https://github.com/Kakar21/Join'
    },
    {
      name: 'Sharkie',
      path: 'sharkie-01',
      number: '02',
      tools: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
      link: 'https://sharkie.kakar.dev/',
      github: 'https://github.com/Kakar21/Sharkie'
    },
    {
      name: 'Portfolio',
      path: 'sharkie',
      number: '03',
      tools: 'Angular | TypeScript | HTML | SCSS',
      description: "This website is my personal showcase as a Front-End Developer. It presents my skills and projects elegantly to impress potential employers.",
      link: '',
      github: 'https://github.com/Kakar21/Portfolio'
    },
    {
      name: 'Simple CRM',
      path: 'sharkie',
      number: '04',
      tools: 'Angular | TypeScript | HTML | SCSS | Firebase',
      description: 'A very Simple Customer Relationship Management system working with CRUD functionality. [COMING SOON]',
      link: '',
      github: ''
    },
    // TODO: change the paths
  ];
}
