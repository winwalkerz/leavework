import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLeaveComponent } from './add-leave.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [AddLeaveComponent],
  imports: [
    CommonModule,
    NzDrawerModule,
    NzButtonModule,
  ]
})
export class AddLeaveModule { }
