import { Company } from "./company";
import { User } from "./user";

export class Offre {
idOffre!:number;
poste!:String;
description!:String;
createDate!:Date;
company!:Company;
listCandPostul!:Set<User>;
Offre() {

	// TODO Auto-generated constructor stub
}
}
