import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MohdService } from '../shared/service/mohd.service';
import { Movie } from '../shared/models/movie.model';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.css']
})
export class MovieViewComponent implements OnInit {
  public movie: Movie;
  public urlId: string;
  constructor(
    private service: MohdService,
    private route: ActivatedRoute,
    private readonly sanitizer: DomSanitizer,
    private router: Router
  ) {}

  ngOnInit() {
    let urlID = this.route.snapshot.paramMap.get('urlID');
    this.urlId = urlID;
    this.getInfo(this.urlId);
  }

  public createSaveUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' + url
    );
  }

  public getInfo(url: string) {
    for (let x of this.service.categories) {
      for (let x1 of x.movie) {
        if (x1.urlID === url) {
          this.movie = x1;
        }
      }
    }
  }
  onSelectMovie(movie) {
    this.router.navigate(['/fullMovie', movie.urlID]);
  }
}
