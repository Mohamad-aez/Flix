import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  public width = 240;
  public height = 160;

  @Input()
  public movie: Movie;
  constructor(
    private readonly sanitizer: DomSanitizer,
    private router: Router
  ) {}

  public createSafeYoutubeUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' + this.movie.urlID
    );
  }
  ngOnInit() {}
  onSelectMovie(movie) {
    this.router.navigate(['/movie', movie.urlID]);
  }
}
