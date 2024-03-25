import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PostCarComponent } from './components/post-car/post-car.component';
import {NgZorroImportsModule} from "../../NgZorroImportsModule";
import {NzOptionComponent, NzSelectComponent} from "ng-zorro-antd/select";
import {NzYearPickerComponent} from "ng-zorro-antd/date-picker";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AdminDashboardComponent,
    PostCarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgZorroImportsModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AdminModule { }