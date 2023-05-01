import { LightningElement, wire } from 'lwc';
import currentUserId from '@salesforce/user/Id';
import { getRecord } from 'lightning/uiRecordApi';
import SmallPhotoUrlField from '@salesforce/schema/User.SmallPhotoUrl';
import NameField from '@salesforce/schema/User.Name';

export default class Submitter extends LightningElement {
    photoURL;
    userName;
    userLink;

    @wire(getRecord, { recordId: currentUserId, fields: [SmallPhotoUrlField, NameField]}) 
    currentUserInfo({error, data}) {
        if (data) {
            this.photoURL = data.fields.SmallPhotoUrl.value;
            this.userName = data.fields.Name.value;
            this.userLink = '/' + currentUserId;
        } else if(error) {
            console.log(error);
        }
    }
}