import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  url="http://localhost:5555/todo"
  constructor(private http:HttpClient) { }
  getData(){
   return this.http.get(this.url);
  }
  saveEmp(data:any){
    
     return this.http.post(this.url,data);
  }
  deleteEmp(id:any){
     return this.http.delete(`${this.url}/${id}`);
  }
  getCurrentEmp(id:any){
    return this.http.get(`${this.url}/${id}`);
  }
  updateEmp(id:any,data:any){
    return this.http.put(`${this.url}/${id}`,data);
  }
}
