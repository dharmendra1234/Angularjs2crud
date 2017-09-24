import { employee } from './employee';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  employee: any;
  id: number;

  employeeList = EMPLOYEES;


  constructor() { }



  getEmployeeList() {
    return this.employeeList;
  }

  getEmployee(id) {
    return this.employeeList[id];
  }

  addEmployee(form) {
    this.employee = form;
    this.id = this.employeeList.length;
    this.employee.id = this.id + 1;
    this.employeeList.push(this.employee);
  }

  updateEmployee(employeeForm) {
    this.employeeList[employeeForm.id - 1] = employeeForm;
  }
  
  deleteEmployee(employee){
    this.employeeList.splice(this.employeeList.indexOf(employee),1);
  }

}

const EMPLOYEES: employee[] = [
  { id: 1, firstname: 'dharmendra', lastname: 'pawar', email: 'dharmendra.pawar@gmail.com', phone: '4708093327' },
  { id: 2, firstname: 'dharmendra123213', lastname: 'pawar', email: 'dharmendra.pawar@gmail.com', phone: '4708093327' }
];