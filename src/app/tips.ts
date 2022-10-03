
import { Timestamp } from "rxjs/internal/types";
import { Image } from "./image";
import { User } from "./user";

export class Tips {
   idtip!:number;
 titrecons!:String;
 contenu!:String;
 createDate!:Date;

 listUserSave!:Set<User>;

  img!:Image;
}
