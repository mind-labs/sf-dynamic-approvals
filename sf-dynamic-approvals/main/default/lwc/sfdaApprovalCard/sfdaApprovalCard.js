import { LightningElement, api, wire } from 'lwc';
import CURRENT_USER_ID from '@salesforce/user/Id';

export default class ApprovalCard extends LightningElement {
    // this is the outer component containing ApprovalProcessReader, Submitter and ProgressBar
    // ...
    @api recordId;

    // for testing, re-reference once approval record structure is clear
    submitterId = CURRENT_USER_ID;
    approvalProcessName = 'Approval Process Name';
    startDate = new Date().toISOString().substring(0, 10);
    status = 'Open';
    mode = 'Locked';

    get locked() {
        return (this.mode == 'Locked');
    }

    //temporary solution, discuss if actions should be shown for other people as well
    get showApprovalActions() {
        return (this.submitterId == CURRENT_USER_ID);
    }

    // get approval record
    /*@wire(getRecord, { recordId: recordId, fields: [NameField, ModeField, StatusField, StartDateField, SubmitterField]}) 
    approvalRecordData({error, data}) {
        if (data) {
            this.approvalRecord = data;
        } else if(error) {
            console.log(error);
        }
    }*/

}