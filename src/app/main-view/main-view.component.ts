import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/models/category.model';
import { MohdService } from '../shared/service/mohd.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  public categories: Category[];
  constructor(private readonly mohdService: MohdService) {}

  ngOnInit() {
    this.categories = this.mohdService.categories;
  }
}
