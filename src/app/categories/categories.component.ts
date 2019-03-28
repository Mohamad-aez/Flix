import { OnInit, Component, Input } from '@angular/core';
import { Category } from 'src/app/shared/models/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Input()
  public category: Category;

  constructor() {}

  ngOnInit() {}
}
