import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {CrudService} from '../crud.service';

@Component({
  selector: 'app-upd-emp',
  templateUrl: './upd-emp.component.html',
  styleUrls: ['./upd-emp.component.css']
})
export class UpdEmpComponent implements OnInit {

  editEmp= new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    name: new FormControl(''),
    website: new FormControl(''),
    address: new FormControl(''),
    role_name: new FormControl(''),
  })
  constructor(private router:ActivatedRoute,private crud:CrudService) { }

  res:any=[]
  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id);
    this.crud.getCurrentEmp(this.router.snapshot.params.id).subscribe((result:any)=>{
      this.res=result;
      console.warn(this.res[0].firstname);
      this.editEmp= new FormGroup({
        firstname: new FormControl(this.res[0].firstname),
        lastname: new FormControl(this.res[0].lastname),
        email: new FormControl(this.res[0].email),
        phone: new FormControl(this.res[0].phone),
        name: new FormControl(this.res[0].name),
        website: new FormControl(this.res[0].website),
        address: new FormControl(this.res[0].address),
        role_name: new FormControl(this.res[0].role_name),
      })
    })
  }
  collection(){
    console.warn(this.editEmp.value);
    this.crud.updateEmp(this.router.snapshot.params.id,this.editEmp.value).subscribe((result:any)=>{
      console.warn(result);
    })
  }

}
