import { LightningElement,api } from 'lwc';

export default class ChildComponent extends LightningElement {
    sendData(){
        const dataInfo= new CustomEvent("send",{
            detail:{name:"Sumanth", city:"Bangalore"}
        });
        this.dispatchEvent(dataInfo);
    }
}