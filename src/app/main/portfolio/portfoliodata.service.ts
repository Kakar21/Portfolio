import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfoliodataService {

  constructor() { }

  projectlist = [
    {
      name: 'Coderr',
      path: 'coderr',
      number: '01',
      tools: 'JavaScript | HTML | CSS | Python | Django',
      link: 'https://coderr.kakar.dev/',
      github: 'https://github.com/Kakar21/Coderr'
    },
    {
      name: 'DABubble',
      path: 'dabubble',
      number: '02',
      tools: 'Angular | TypeScript | HTML | SCSS | Firebase',
      link: 'https://dabubble.kakar.dev/',
      github: 'https://github.com/Kakar21/DABubble'
    },
    {
      name: 'Sharkie',
      path: 'sharkie',
      number: '03',
      tools: 'JavaScript | HTML | CSS',
      link: 'https://sharkie.kakar.dev/',
      github: 'https://github.com/Kakar21/Sharkie'
    },
    {
      name: 'Join',
      path: 'join',
      number: '04',
      tools: 'JavaScript | HTML | CSS | Python | Django',
      link: 'https://join.kakar.dev/',
      github: 'https://github.com/Kakar21/Join'
    }
  ];
}
