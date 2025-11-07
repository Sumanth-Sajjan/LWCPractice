import { api, LightningElement, wire } from 'lwc';
import getAccountRecords from '@salesforce/apex/accountController.getAccountRecords';

export default class AccountDetailsPanel extends LightningElement {
    
    accountRecords;
    @api recordId;

    @wire(getAccountRecords,{recordId:'$recordId'})
    wiredCases({data,error}){
        if(data){
            this.accountRecords=data;
        }
        if(error){
            alert("Error occured "+ error.body.message);
        }
    }

}