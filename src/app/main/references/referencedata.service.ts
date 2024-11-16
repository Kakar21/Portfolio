import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReferencedataService {

  constructor() { }

  referencesList = [
    {
      name: 'Leonhard Albert',
      positionPath: 'references-position-1',
      quotePath: 'references-quote-1',
      linkedin: 'https://www.linkedin.com/in/leonhard-albert-672690214/'
    },
    {
      name: 'Marco Ammann',
      positionPath: 'references-position-2',
      quotePath: 'references-quote-2',
      linkedin: 'https://www.linkedin.com/in/marco-ammann/'
    },
    {
      name: 'Kaser Mahmood',
      positionPath: 'references-position-3',
      quotePath: 'references-quote-3',
      linkedin: 'https://www.linkedin.com/in/kaser-mahmood/'
    }
  ]
}
