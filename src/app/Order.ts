import { NgFormSelectorWarning } from "@angular/forms";

export class Order{
    id: number;
    client: string;
    date: Date;
    summa: number;
    status: string;
    type: string;
    dateOtg:Date;
    menedger: string;
    organiz: string;
    region: string;
    montajnic:string;
    phone: string;
    constructor ( ){
        this.id=0;
        this.client='';
        this.date=new Date();
        this.summa= 0;
        this.status= '';
        this.type= '';
        this.dateOtg=new Date();
        this.menedger= '';
        this.organiz='';
        this.region='';
        this.montajnic='';
        this.phone='';
    }
}