import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offre } from './offre';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http:HttpClient) { }
  addoffer(o:Offre,id:number):Observable<Object>{return this.http.post("http://localhost:8081/AddOffer"+id,{o:o,id:id})}
  deleteoffre(id:number):Observable<Object>{return this.http.delete("http://localhost:8081/DeleteOffer/"+id)}
  getAlloffers():Observable<Object>{return this.http.get<Object>("http://localhost:8081/getAllOffers")}
  Updateoffre( o:Offre ,id:number):Observable<Object>{return this.http.post("http://localhost:8081/UpdateOffer/"+id,{o:o,id:id})}
  addOfferWithtest( o:Offre,idcomp:number):Observable<Object>{return this.http.post("http://localhost:8081/addOfferWithTestExistence/"+idcomp,{o,idcomp})}
  findByPoste(poste:String):Observable<Object>{return this.http.get("http://localhost:8081/findOfferByPoste/"+poste)}
}
