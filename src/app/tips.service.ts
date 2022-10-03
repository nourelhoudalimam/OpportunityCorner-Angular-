import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tips } from './tips';

@Injectable({
  providedIn: 'root'
})
export class TipsService {

  constructor(private http:HttpClient) { }
  addtip(t:Tips):Observable<Object>{return this.http.post("http://localhost:8081/AddTip/",{t:t})}
  deletetip(id:number):Observable<Object>{return this.http.delete("http://localhost:8081/DeleteTip/"+id)}
  getAlltips():Observable<Object>{return this.http.get("http://localhost:8081/getAllTips")}
  Updatetip( t:Tips ,id:number):Observable<Object>{return this.http.post("http://localhost:8081/UpdateTips/"+id,{id:id})}
  addtipWithtest( t:Tips):Observable<Object>{return this.http.post("http://localhost:8081/addTipsWithTestExistence",{t:t})}
  findByTitle(title:String):Observable<Object>{return this.http.get("http://localhost:8081/findByTitleOfTip/"+title)}
}
