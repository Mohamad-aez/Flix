import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainViewComponent } from './main-view/main-view.component';
import { CategoriesComponent } from './categories/categories.component';
import { MovieComponent } from './movie/movie.component';
import { MovieViewComponent } from './movie-view/movie-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    MainViewComponent,
    MovieComponent,
    MovieViewComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
