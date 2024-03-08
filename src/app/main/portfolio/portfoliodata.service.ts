import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfoliodataService {

  constructor() { }

  projectlist = [
    {
      name: 'Sharkie',
      path: 'sharkie',
      number: '01'
    },
    {
      name: 'gdrgdg',
      path: 'sharkie',
      number: '02'
    },
    {
      name: 'Sha543652rkie',
      path: 'sharkie',
      number: '03'
    },
  ];
}
