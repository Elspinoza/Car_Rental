import { Component } from '@angular/core';
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {

  constructor(private adminService: AdminService) {
  }

  ngOnInt(){
    this.getAllCars();
  }

  getAllCars() {
    this.adminService.getAllCars().subscribe((res)=> {
      console.log(res);
    })
  }

}
