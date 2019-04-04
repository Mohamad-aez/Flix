import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../shared/models/movie.model';
import { MohdService } from '../shared/service/mohd.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-full-movie',
  templateUrl: './full-movie.component.html',
  styleUrls: ['./full-movie.component.css']
})
export class FullMovieComponent implements OnInit {
  public movie: Movie;
  public urlId: string;
  ngOnInit() {
    let urlID = this.route.snapshot.paramMap.get('urlID');
    this.urlId = urlID;
    // this.getInfo(this.urlId);
  }

  // public getInfo(url: string) {
  //   for (let x of this.service.categories) {
  //     for (let x1 of x.movie) {
  //       if (x1.urlID === url) {
  //         this.movie = x1;
  //       }
  //     }
  //   }
  // }
  public createSaveUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' + url
    );
  }

  constructor(
    private service: MohdService,
    private route: ActivatedRoute,
    private readonly sanitizer: DomSanitizer
  ) {}
}
