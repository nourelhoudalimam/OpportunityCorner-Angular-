







import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, identity, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

import { LoginRequest } from './login-request.model';
import { loginResponse } from './loginResponse.model';
import { Role } from './role';

import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  getOfferById(id: number) {
    ;
  }

  public details:any=[];
public sharedPost=new BehaviorSubject<string>(this.details);
public dd=new Subject<string>();


form={
  fullname:"",
  postoff:"",
  email:"",
  phone:"",message:""
  }



  public setPost(value:string):void{
    this.sharedPost.next(value);
  }



   getPost():Observable<string>{return this.sharedPost.asObservable();}

  getUsers():Observable<User[]>  {
    return this.http.get<User[]>(environment.baseUrl+"/Offers")


  }
 user=new BehaviorSubject(new User())
userValue=new User()

  constructor(private router:Router,private http:HttpClient) { }

 saveUser(user:User ,jwt:string){
localStorage.setItem("currentUser",JSON.stringify(user))
localStorage.setItem("JSONWebToken",JSON.stringify(jwt))
this.user.next(user) }
  Logout(){localStorage.clear()
    console.log("Authenticity after login is:"+this.isAuthentificated())
    this.router.navigateByUrl('/home')
  }
Login(email:string,password:string):Observable<loginResponse>{
var logReq=new LoginRequest();
let host= "http://localhost:4200";
console.log("service log"+email+"password:"+password)
return this.http.post<loginResponse>(host+"/login",{email:email,password:password})
  }
  isAuthentificated(){
    var jwt=localStorage.getItem("JSONWebToken")
if(jwt) {return true}
else {return false}}
isAdmin(){console.log('admin')}
getUserfromLocal(){
  var user:User=JSON.parse(localStorage.getItem("currentUser")!)
  return user
}
isAdminTest(){
  var usr:User=this.getUserfromLocal()
  if((usr!=null) && (usr.roleusers.role==Role.Admin)){return true;}
  else{return false}
}
AddUser( u:User,id:number,idg:number):Observable<User>{
  return this.http.post<User>("http://localhost:8081/AddUser"+id,{u,id,idg});
}
addUserWpw(u:User):Observable<Object>{return this.http.post("http://localhost:8081/addUserWithPassword",u);}
UpdateUser( u:User , idUser:any):Observable<Object>{return this.http.post("http://localhost:8081/UpdateUser/"+idUser,{u:u,idUser:idUser})}
DeleteUser( id:any):Observable<Object>{return this.http.delete("http://localhost:8081/deleteUser/"+id,id);}
getAllUsers():Observable<Object>{return this.http.get("http://localhost:8081/getAllUsers");}
getUserById( id:any):Observable<Object>{return this.http.get("http://localhost:8081/getUser/"+id,id);}
addCVUser( idUser:any,  cv:any):Observable<Object>{return this.http.post("http://localhost:8081/addCVUser/"+idUser,{idUser:idUser,cv:cv});}
addUserWithUsername(u:User,idr:number,idg:number):Observable<Object>{return this.http.post("http://localhost:8081/addUserWithUsername/"+idr+"/"+idg,{u,idr,idg});}
addOfferUser( idUser:number,  idOff:number):Observable<Object>{return this.http.post("http://localhost:8081/AddSavedOfferUser/"+idUser+"/"+idOff,{idUser,idOff});}}


