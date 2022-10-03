import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http:HttpClient) { }
  addevent(e:Event,id:number):Observable<Object>{return this.http.post("http://localhost:8081/AddEvent/"+id,{e:e,id:id})}
  deleteevent(id:number):Observable<Object>{return this.http.delete("http://localhost:8081/DeleteEvent/"+id)}
  getAllevents():Observable<Object>{return this.http.get<Object>("http://localhost:8081/getAllEvents")}
  Updateevent( e:Event ,id:number):Observable<Object>{return this.http.post("http://localhost:8081/UpdateEvent/"+id,{e:e,id:id})}
  addEventWithtest( e:Event,idev:number):Observable<Object>{return this.http.post("http://localhost:8081/addEventWithTestExistence/"+idev,{e,idev})}
  findByLieu(lieu:String):Observable<Object>{return this.http.get("http://localhost:8081/findEventByTitle/"+lieu)}
  findByOrga(orga:String):Observable<Object>{return this.http.get("http://localhost:8081/findEventByOrganisator/"+orga)}


}



