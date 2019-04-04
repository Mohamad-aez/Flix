import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Movie } from '../shared/models/movie.model';

export class MovieForm extends FormGroup {
  category: any;
  title: string;
  description: string;
  year: number;
  urlID: string;
  constructor() {
    super({
      category: new FormControl('', [Validators.required]),
      title: new FormControl('', [
        Validators.required,
        Validators.maxLength(50)
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(50)
      ]),
      year: new FormControl('', [Validators.required, Validators.max(2019)]),
      urlID: new FormControl('', [
        Validators.required,
        Validators.maxLength(200)
      ])
    });
  }

  /** Gets the model of this form */
  public getModel(): Movie {
    return {
      category: this.controls.category.value,
      title: this.controls.title.value,
      description: this.controls.description.value,
      urlID: this.controls.urlID.value,
      year: this.controls.year.value
    };
  }
}
