import { CrudService } from './../../crud.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  isCollapsed = false;
  data: any;
  constructor(private crud : CrudService) {}

  ngOnInit(): void {
    this.showData();
  }

  showData() {
    this.crud.refresh().then((res: any) => {
      this.data = res;
      // console.warn(this.data);
    });
  }
}
