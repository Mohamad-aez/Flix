import { Component } from '@angular/core';
import { Movie } from './shared/models/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flix';

  public movies: Movie[] = [
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
  ];
}
