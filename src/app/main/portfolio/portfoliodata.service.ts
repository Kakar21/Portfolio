import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfoliodataService {

  constructor() { }

  projectlist = [
    {
      name: 'DABubble',
      path: 'dabubble',
      number: '01',
      tools: 'Angular | TypeScript | HTML | SCSS | Firebase',
      link: '',
      github: 'https://github.com/Kakar21/DABubble'
    },
    {
      name: 'Sharkie',
      path: 'sharkie',
      number: '02',
      tools: 'JavaScript | HTML | CSS',
      link: 'https://sharkie.kakar.dev/',
      github: 'https://github.com/Kakar21/Sharkie'
    },
    {
      name: 'Join',
      path: 'join',
      number: '03',
      tools: 'JavaScript | HTML | CSS',
      link: 'https://join.kakar.dev/',
      github: 'https://github.com/Kakar21/Join'
    },
    {
      name: 'Portfolio',
      path: 'portfolio',
      number: '04',
      tools: 'Angular | TypeScript | HTML | SCSS',
      link: '',
      github: 'https://github.com/Kakar21/Portfolio'
    },

  ];
}
