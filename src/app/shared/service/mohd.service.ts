import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MohdService {
  public categories: Category[] = [
    {
      name: 'Animals Life',
      movie: [
        {
          category: 'Animals Life',
          title: 'Interstellar',
          director: 'Tarentino',
          year: 2014,
          urlID: '_13J_9B5jEk'
        },
        {
          category: 'Animals Life',
          title: 'Titanic',
          director: 'James cameron',
          year: 2007,
          urlID: '0vxOhd4qlnA'
        },
        {
          category: 'Animals Life',
          title: 'ASFD',
          director: 'J cameron',
          year: 2008,
          urlID: 'dtKMEAXyPkg'
        },
        {
          category: 'Animals Life',
          title: 'Interstellar',
          director: 'Tarentino',
          year: 2014,
          urlID: '_13J_9B5jEk'
        }
      ]
    },
    {
      name: 'Sports',
      movie: [
        {
          category: 'Sports',
          title: 'Interstellar',
          director: 'Tarentino',
          year: 2014,
          urlID: '_13J_9B5jEk'
        },
        {
          category: 'Sports',
          title: 'Titanic',
          director: 'James cameron',
          year: 2007,
          urlID: '0vxOhd4qlnA'
        },
        {
          category: 'Sports',
          title: 'ASFD',
          director: 'J cameron',
          year: 2008,
          urlID: 'dtKMEAXyPkg'
        },
        {
          category: 'Sports',
          title: 'Interstellar',
          director: 'Tarentino',
          year: 2014,
          urlID: '_13J_9B5jEk'
        }
      ]
    },
    {
      name: 'Comedy',
      movie: [
        {
          category: 'Comedy',
          title: 'Interstellar',
          director: 'Tarentino',
          year: 2014,
          urlID: '_13J_9B5jEk'
        },
        {
          category: 'Comedy',
          title: 'Titanic',
          director: 'James cameron',
          year: 2007,
          urlID: '0vxOhd4qlnA'
        },
        {
          category: 'Comedy',
          title: 'ASFD',
          director: 'J cameron',
          year: 2008,
          urlID: 'dtKMEAXyPkg'
        },
        {
          category: 'Comedy',
          title: 'Interstellar',
          director: 'Tarentino',
          year: 2014,
          urlID: '_13J_9B5jEk'
        }
      ]
    },
    {
      name: 'Crime',
      movie: [
        {
          category: 'Crime',
          title: 'Interstellar',
          director: 'Tarentino',
          year: 2014,
          urlID: '_13J_9B5jEk'
        },
        {
          category: 'Crime',
          title: 'Titanic',
          director: 'James cameron',
          year: 2007,
          urlID: '0vxOhd4qlnA'
        },
        {
          category: 'Crime',
          title: 'ASFD',
          director: 'J cameron',
          year: 2008,
          urlID: 'dtKMEAXyPkg'
        },
        {
          category: 'Crime',
          title: 'Interstellar',
          director: 'Tarentino',
          year: 2014,
          urlID: '_13J_9B5jEk'
        }
      ]
    }
  ];
  constructor() {}

  // public addCategory(category: Category): void {
  //   this.categories.push(category);
  // }

  public addMovie(movie: Movie, category: Category) {
    category.movie.push(movie);
  }
}
