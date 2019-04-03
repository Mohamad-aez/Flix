import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/models/movie.model';
import { MohdService } from '../shared/service/mohd.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-full-movie',
  templateUrl: './full-movie.component.html',
  styleUrls: ['./full-movie.component.css']
})
export class FullMovieComponent implements OnInit {
  public movie: Movie;
  public urlId: string;
  constructor(
    private service: MohdService,
    private route: ActivatedRoute,
    private readonly sanitizer: DomSanitizer
  ) {}

  ngOnInit() {}
  public createSaveUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' + url
    );
  }
}
