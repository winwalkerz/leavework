import { AddLeaveComponent } from './../../components/add-leave/add-leave.component';
import { CrudService } from './../../crud.service';
import { Component, OnInit } from '@angular/core';
import { NzDrawerService, NzDrawerRef } from 'ng-zorro-antd/drawer'; //import service ของ ant

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  isCollapsed = false;
  data: any;
  constructor(
    private crud: CrudService,
    private nzDrawerService: NzDrawerService //ประกาศตัวแปลเพื่อมาใช้งาน
  ) {}

  addLeave() {
    const drawRef = this.nzDrawerService.create<AddLeaveComponent>({
      nzTitle: 'เพิ่มรายการลางาน',
      nzContent: AddLeaveComponent,
    });
  }

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
