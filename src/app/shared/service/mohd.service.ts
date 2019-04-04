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
          title: 'Wild Animals',
          description: ' Documentary Wild Animals',
          year: 2015,
          urlID: 'TKmGU77INaM'
        },
        {
          category: 'Animals Life',
          title: 'Parrot',
          description:
            // tslint:disable-next-line: max-line-length
            'Parrots, also known as psittacines /ˈsɪtəsaɪnz/,[1][2] are birds of the roughly 393 species in 92 genera that make up the order Psittaciformes, found in most tropical and subtropical regions.',
          year: 2016,
          urlID: 'RK1K2bCg4J8'
        },
        {
          category: 'Animals Life',
          title: 'Wild birds',
          description:
            'Australian nature is extremely diverse and interesting, with a number of unique animals living in Australia.',
          year: 2017,
          urlID: '1xYpn8HNYEg'
        },
        {
          category: 'Animals Life',
          title: 'Snake',
          description:
            'the dangers of poisonous snakes, poisonous snakes in the world. Snakes are dangerous for humans,',
          year: 2017,
          urlID: '8zqJP-anCLc'
        }
      ]
    },
    {
      name: 'Sports',
      movie: [
        {
          category: 'Sports',
          title: 'Greatest Sports Moments',
          description:
            ' The most iconic, unbelievable, funny, notorious, and inspiring moments in sports history ',
          year: 2019,
          urlID: 'o7W7OvETO40'
        },
        {
          category: 'Sports',
          title: 'Boxing fights',
          description: 'Top 10 boxing fights of the year on BT Sport in 2018 ',
          year: 2018,
          urlID: 'DoXWNhP52X4'
        },
        {
          category: 'Sports',
          title: 'Most insane Games 2018',
          description: '',
          year: 2008,
          urlID: 'HcCv2S_syIk'
        },
        {
          category: 'Sports',
          title: 'Italy World Cup 2006',
          description: ' Italy 2006 World Cup Champion Trip',
          year: 2006,
          urlID: 'uZa-ewiL_ZY'
        }
      ]
    },
    {
      name: 'Lake',
      movie: [
        {
          category: 'Lake',
          title: 'Lake Como',
          description: 'Lake Como, Italy (Lago di Como, Italia) by drone',
          year: 2017,
          urlID: 'fLMC3Paxicw'
        },
        {
          category: 'Lake',
          title: '10 Best Places To Visit In Italy',
          description: 'These are 10 best places to Visit in Italy',
          year: 2018,
          urlID: 'ZfaaUggm0gk'
        },
        {
          category: 'Lake',
          title: 'Garda',
          description:
            'Lake Garda is the largest lake in Italy. This video explores ' +
            'some of the beautiful lakeside towns including Malescine, Limone and Riva del Garda',
          year: 2010,
          urlID: '-us2KFU63vo'
        },
        {
          category: 'Lake',
          title: 'Venice',
          description: '20 Things to do in Venice,' + 'Italy Travel Guide',
          year: 2018,
          urlID: 'cN9W2QeFI2Q'
        }
      ]
    },
    {
      name: 'Mountain',
      movie: [
        {
          category: 'Mountain',
          title: 'Italy Mystery Mountains',
          description: "Documentary Italy's Mystery Mountains 2014",
          year: 2014,
          urlID: 'HlcBF3dgGhs'
        },
        {
          category: 'Mountain',
          title: 'Everest ',
          description:
            'A gripping and timeless ' +
            'documentary recording' +
            ' the first ascent of the' +
            ' South Face of Annapurna in 1970,' +
            ' apparently impossible but one that proved,' +
            ' with the right ',
          year: 2017,
          urlID: 'fFdSG5DUgGk'
        },
        {
          category: 'Mountain',
          title: 'Alps earth formation',
          description:
            'Mont Blanc extends under the French-Italian border, and with 4810 m altitude',
          year: 2016,
          urlID: 'Ae-x5EYkaEA'
        },
        {
          category: 'Mountain',
          title: 'Most Beautiful Mountains',
          description:
            'the dangers of poisonous snakes, poisonous snakes in the world. Snakes are dangerous for humans,',
          year: 2017,
          urlID: 'CzMxuY2pQeQ'
        }
      ]
    },
    {
      name: 'Where to go',
      movie: [
        {
          category: 'Where to go',
          title: 'South Italy',
          description: 'South Italy tuk-tuk adventure: travel documentary',
          year: 2017,
          urlID: 'ahZ2bflM26Q'
        },
        {
          category: 'Where to go',
          title: 'Naples italy',
          description: '10 Things to do in Naples, Italy Travel Guide',
          year: 2018,
          urlID: 'mEM1v4vPIYk'
        },
        {
          category: 'Where to go',
          title: 'Positano Italy',
          description: 'Positano Italy - A guide to The Amalfi Coast and Capri',
          year: 2017,
          urlID: '7w4eXnpJPGc'
        },
        {
          category: 'Where to go',
          title: 'Italy',
          description: '10 Best Places to Visit in Italy ',
          year: 2017,
          urlID: 'lv0hk32J0iw'
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
