import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    name;
    city;
    handleData(event){
        const data = event.detail;
        this.name = data.name;
        this.city = data.city;
    }
}