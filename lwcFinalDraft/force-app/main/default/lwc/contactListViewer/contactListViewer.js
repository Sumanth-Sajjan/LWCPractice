import { LightningElement, wire } from 'lwc';
import contactRecords from '@salesforce/apex/contatcsFromAccount.contactRecords'
import { refreshApex } from '@salesforce/apex';
import Toast from 'lightning/toast';

export default class ContactListViewer extends LightningElement {

    contactList;
    wiredContactResults;
    accountId = '001d20000160R61AAE';

    @wire(contactRecords,{accountId:'$accountId'})
    wiredContacts(result){
        this.wiredContactResults = result;
        if(result.data){
            this.contactList = result.data;
        }
        if(result.error){
            console.log(result.error);
        }
    } 
    async handleRefresh(){
        try {
            await refreshApex(this.wiredContactResults);
            Toast.show({
                label:'Contact List Refreshed',
                message:'Contact List Refreshed',
                variant:'success',
                mode:'sticky'
            })
        } catch (error) {
            console.log(error);
        }
    }
    
}