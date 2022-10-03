import { Company } from "./company";
import { Role } from "./role";
import { User } from "./user";

export class Roleuser {
 idRole!:number;

   role!:Role;
   users!:Set<User>;
   CompRole!:Set<Company>;
}
