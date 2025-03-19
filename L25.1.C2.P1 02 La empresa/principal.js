import Cl_administrativo from "./Cl_administrativo.js";
import Cl_obrero from "./Cl_obrero.js";
export default class Cl_main{
    constructor(){
        let per1= new Cl_administrativo('Luis',15,2,1),
        per2= new Cl_obrero('Ana',20,1,2),
        per3= new Cl_obrero('Raul',17,1,0),
        per4= new Cl_administrativo('Liz',19,2,3),
        per5= new Cl_administrativo('Eva',22,1,5);
    }
}