import { LightningElement } from 'lwc';

export default class SiblingParent extends LightningElement {
    position;

   handleData(event) {
        this.position = event.detail.role;
    }

}