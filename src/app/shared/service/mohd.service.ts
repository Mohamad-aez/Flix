import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class MohdService {
  public categories: Category[] = [
    {
      name: 'Animal Life',
      movie: [
        {
          title: 'Ducks',
          description: ' Documentary on the Mysteries of Ducks',
          year: 2015,
          urlID: 'gJBsz-No0Z8'
        },
        {
          title: 'Salmon',
          description:
            // tslint:disable-next-line: max-line-length
            'Salmon are native to tributaries of the North Atlantic (genus Salmo) and Pacific Ocean (genus Oncorhynchus). Many species of salmon have been introduced into non-native environments such as the Great Lakes of North America and Patagonia in South America. Salmon are intensively farmed in many parts of the world.',
          year: 2016,
          urlID: 'lVUD5ZaWnGk'
        },
        {
          title: 'Wild birds',
          description:
            'Australian nature is extremely diverse and interesting, with a number of unique animals living in Australia.',
          year: 2017,
          urlID: '1xYpn8HNYEg'
        },
        {
          title: 'Snake',
          description:
            'the dangers of poisonous snakes, poisonous snakes in the world. Snakes are dangerous for humans,',
          year: 2017,
          urlID: 'yxAVjWy4amI'
        }
      ]
    },
    {
      name: 'Sports',
      movie: [
        {
          title: 'Greatest Sports Moments',
          description:
            ' The most iconic, unbelievable, funny, notorious, and inspiring moments in sports history ',
          year: 2019,
          urlID: 'o7W7OvETO40'
        },
        {
          title: 'Boxing fights',
          description: 'Top 10 boxing fights of the year on BT Sport in 2018 ',
          year: 2018,
          urlID: 'DoXWNhP52X4'
        },
        {
          title: 'Most insane Games 2018',
          description: '',
          year: 2008,
          urlID: 'HcCv2S_syIk'
        },
        {
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
          title: 'Lake Como',
          description: 'Lake Como, Italy (Lago di Como, Italia) by drone',
          year: 2017,
          urlID: 'F1bGGf1L8lM'
        },
        {
          title: '10 Best Places To Visit In Italy',
          description: 'These are 10 best places to Visit in Italy',
          year: 2018,
          urlID: 'ZfaaUggm0gk'
        },
        {
          title: 'Garda',
          description:
            'Lake Garda is the largest lake in Italy. This video explores ' +
            'some of the beautiful lakeside towns including Malescine, Limone and Riva del Garda',
          year: 2010,
          urlID: '-us2KFU63vo'
        },
        {
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
          title: 'Italy Mystery Mountains',
          description: "Documentary Italy's Mystery Mountains 2014",
          year: 2014,
          urlID: 'HlcBF3dgGhs'
        },
        {
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
          title: 'Alps earth formation',
          description:
            'Mont Blanc extends under the French-Italian border, and with 4810 m altitude',
          year: 2016,
          urlID: '2c_usOpyBwI'
        },
        {
          title: 'Most Beautiful Mountains In The World',
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
          title: 'South Italy',
          description: 'South Italy tuk-tuk adventure: travel documentary',
          year: 2017,
          urlID: 'ahZ2bflM26Q'
        },
        {
          title: 'Naples italy',
          description: '10 Things to do in Naples, Italy Travel Guide',
          year: 2018,
          urlID: 'mEM1v4vPIYk'
        },
        {
          title: 'Positano Italy',
          description: 'Positano Italy - A guide to The Amalfi Coast and Capri',
          year: 2017,
          urlID: '7w4eXnpJPGc'
        },
        {
          title: 'Italy',
          description: '10 Best Places to Visit in Italy ',
          year: 2017,
          urlID: 'lv0hk32J0iw'
        }
      ]
    }
  ];
  constructor() {}
}
