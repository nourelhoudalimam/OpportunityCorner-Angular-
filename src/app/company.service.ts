import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http:HttpClient) { }
  AddCompany(c:Company):Observable<Object>{return this.http.post<String>("http://localhost:8081/addCompanyWithTestExistence",{c:c})}
getAllCompanies():Observable<Object>{return this.http.get<Object>("http://localhost:8081/getAllCompanies");}
deleteCompany(id:number):Observable<void>{return this.http.delete<void>("http://localhost:8081/DeleteCompany/"+id)}
UpdateCompany(c:Company,id:number):Observable<Object>{return this.http.post<Company>("http://localhost:8081/UpdateCompany"+id,{c:c,id:id})}
addcompanywithtestexistence( c: Company , id:number):Observable<Object>{return this.http.post("http://localhost:8081//AddCompanyWithTestExistence/"+id,{c,id})}
}
