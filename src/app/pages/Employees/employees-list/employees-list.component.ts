import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styles: [
  ]
})
export class EmployeesListComponent implements OnInit {
  public employees:any[] = [];

  constructor(private employeSvc: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }
  getEmployeeList(){
    this.employeSvc.getEmployees()
        .subscribe((resp:any) => {
          this.employees = resp.data.employees;
        })
  }
}
