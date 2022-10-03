import { Timestamp } from "rxjs";
import { Image } from "./image";
import { TypeEvent } from "./type-event";
import { User } from "./user";

export class Events {
 idev!:number;
 titre!:String;
 devent!:Date;

 lieu!:String;
 orga!:String;
 descripton1!:String;
 createDate!:Date;


 listUserParticipate!:Set<User>;

 typeev!:TypeEvent;

 img!:Image;
}
