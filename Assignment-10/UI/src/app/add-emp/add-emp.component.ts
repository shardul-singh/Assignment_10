import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {CrudService} from '../crud.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  addEmp= new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    name: new FormControl(''),
    website: new FormControl(''),
    address: new FormControl(''),
    role_name: new FormControl(''),
  })
  constructor(private crud:CrudService) { }

  ngOnInit(): void {
  }

  collectEmp(){
    // console.warn(this.addEmp.value);
     this.crud.saveEmp(this.addEmp.value).subscribe((result:any)=>{
        console.warn("REsult ",result);
    });
  }

}
