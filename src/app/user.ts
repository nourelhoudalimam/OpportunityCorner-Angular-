
  import { CV } from "./cv";
import { Offre } from "./offre";
import { Roleuser } from "./roleuser";
import { Sexeuser } from "./sexeuser";
import { Tips } from "./tips";

export class User {
   id!:number;

   username!:String;
   fullname!:String;
   phonenumber!:String;
   confpassword!:String;
 password!:String;
 date_naiss!:Date;
 email!:String;
 participate_events!:Set<Event>;
 saved_tips!:Set<Tips>;
 roleusers!:Roleuser;
 sexuser!:Sexeuser;
  cv!:CV;
 List_Postul!:Set<Offre>;

}

