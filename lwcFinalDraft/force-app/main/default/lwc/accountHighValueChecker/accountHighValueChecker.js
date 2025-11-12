import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import ID_FIELD from '@salesforce/schema/Account.Id';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';

const FIELDS = [NAME_FIELD, ID_FIELD, ANNUAL_REVENUE_FIELD];

export default class AccountHighValueChecker extends LightningElement {
    @api recordId;
    name;
    annualRevenue;

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    wiredAccount({ data, error }) {
        if (data) {
            this.name = getFieldValue(data, NAME_FIELD);
            this.annualRevenue = getFieldValue(data, ANNUAL_REVENUE_FIELD);
        } else if (error) {
            console.error(error);
        }
    }
    get isHighValue() {
        return this.annualRevenue && this.annualRevenue > 1000000;
    }

}
