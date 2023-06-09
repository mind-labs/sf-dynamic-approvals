import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import SmallPhotoUrlField from '@salesforce/schema/User.SmallPhotoUrl';
import NameField from '@salesforce/schema/User.Name';

export default class Submitter extends LightningElement {
    photoURL;
    userName;
    userLink;

    @api submitterId;

    @wire(getRecord, { recordId: '$submitterId', fields: [SmallPhotoUrlField, NameField]}) 
    submitterInfo({error, data}) {
        if (data) {
            this.photoURL = data.fields.SmallPhotoUrl.value;
            this.userName = data.fields.Name.value;
            this.userLink = '/' + this.submitterId;
        } else if(error) {
            console.error(error);
        }
    }
}