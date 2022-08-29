import { diffIndexes } from "../model/Profile";

let work =20;
totalPrice=600;
dif;
if(work<=8){
    totalPrice=600;
}
if(work>8 && work<=12){
    work= work-8;
    totalPrice=totalPrice+work*400;
}
if(work>12 && work<=16){
    work=work-12;
    totalPrice=totalPrice+work*300
}
if(work>16 && work<=19){
    work= work-16;
    totalPrice+=work*200;
}

if(work>=20){
    work=work-19;
    totalPrice+=work*100;
}

console.log(totalPrice);