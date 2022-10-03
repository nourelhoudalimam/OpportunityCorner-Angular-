import { Gender } from "./gender";
import { User } from "./user";

export class Sexeuser {
 idgender!:number;
 users!: Set<User>;
 gender!:Gender;
}
