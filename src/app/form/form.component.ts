import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/models/movie.model';
import { MovieForm } from './movie.form';
import { MohdService } from '../shared/service/mohd.service';
import { Category } from '../shared/models/category.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public categories: Category[] = [];
  public category: Category;

  public form: MovieForm = new MovieForm();

  public onFormSubmit() {
    const movie: Movie = this.form.getModel();
    alert(`
Hi ${movie.category} ${movie.title}!
You have been registered to our website.
Prepare to be spammed regularly, starting today! :D
The emailaddress we have is ${movie.year},
we even know your age, which is ${movie.director} , and ${movie.urlID}
    `);
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.movieService.categories.length; i++) {
      console.log(movie.category);
      if (movie.category === this.movieService.categories[i].name) {
        this.movieService.addMovie(movie, this.movieService.categories[i]);
      }
    }
  }
  constructor(private movieService: MohdService) {}

  ngOnInit() {
    this.categories = this.movieService.categories;
  }
}
