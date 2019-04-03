import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainViewComponent } from './main-view/main-view.component';
import { CategoriesComponent } from './categories/categories.component';
import { MovieComponent } from './movie/movie.component';
import { MovieViewComponent } from './movie-view/movie-view.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FullMovieComponent } from './full-movie/full-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    MainViewComponent,
    MovieComponent,
    MovieViewComponent,
    FormComponent,
    FullMovieComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
