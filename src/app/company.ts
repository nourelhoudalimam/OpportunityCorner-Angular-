import { Image } from "./image";
import { Offre } from "./offre";
import { Roleuser } from "./roleuser";


export class Company {
 idComp!:number;
 nom!:String;
 localisation!:String;
 domaine!:String;
 apropos!:String;
 lien!:String;

 offres!:Set<Offre>;

 img!:Image;
 rolecomp!:Roleuser;
}


