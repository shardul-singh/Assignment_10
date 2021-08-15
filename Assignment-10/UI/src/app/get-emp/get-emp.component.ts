import { Component, OnInit } from '@angular/core';
import {CrudService} from '../crud.service';

@Component({
  selector: 'app-get-emp',
  templateUrl: './get-emp.component.html',
  styleUrls: ['./get-emp.component.css']
})
export class GetEmpComponent implements OnInit {

  constructor(private crud:CrudService) { }
  data:Array<any>=[]
  ngOnInit(): void {
    this.crud.getData().subscribe((result:any)=>{
      console.warn(result);
      this.data=result;
    })
  }
  deleteEmp(item:any){
    this.data.splice(item-1,1)
    this.crud.deleteEmp(item).subscribe((result)=>{
      console.warn("result",result);
    })
  }

}
