import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class MohdService {
  public categories: Category[] = [
    {
      name: 'Animals Life',
      movie: [
        {
          title: 'Interstellar',
          director: 'Tarentino',
          year: 2014,
          urlID: '_13J_9B5jEk'
        },
        {
          title: 'Titanic',
          director: 'James cameron',
          year: 2007,
          urlID: '0vxOhd4qlnA'
        },
        {
          title: 'ASFD',
          director: 'J cameron',
          year: 2008,
          urlID: 'dtKMEAXyPkg'
        }
      ]
    },
    {
      name: 'Sports',
      movie: [
        {
          title: 'Interstellar',
          director: 'Tarentino',
          year: 2014,
          urlID: '_13J_9B5jEk'
        },
        {
          title: 'Titanic',
          director: 'James cameron',
          year: 2007,
          urlID: '0vxOhd4qlnA'
        },
        {
          title: 'ASFD',
          director: 'J cameron',
          year: 2008,
          urlID: 'dtKMEAXyPkg'
        }
      ]
    },
    {
      name: 'Comedy',
      movie: [
        {
          title: 'Interstellar',
          director: 'Tarentino',
          year: 2014,
          urlID: '_13J_9B5jEk'
        },
        {
          title: 'Titanic',
          director: 'James cameron',
          year: 2007,
          urlID: '0vxOhd4qlnA'
        },
        {
          title: 'ASFD',
          director: 'J cameron',
          year: 2008,
          urlID: 'dtKMEAXyPkg'
        }
      ]
    }
  ];
  constructor() {}
}
