import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';

import { Movie } from './shared/models/movie.model';
import { Category } from './shared/models/category.model';
import { MovieComponent } from './movie/movie.component';
import { MovieViewComponent } from './movie-view/movie-view.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: 'home',
    component: MainViewComponent
  },
  {
    path: 'movie/:urlID',
    component: MovieViewComponent
  },
  {
    path: 'admin',
    component: FormComponent
  },

  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
