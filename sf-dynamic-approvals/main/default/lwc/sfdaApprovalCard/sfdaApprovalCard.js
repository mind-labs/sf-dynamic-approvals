import { LightningElement, api, wire } from 'lwc';
import CURRENT_USER_ID from '@salesforce/user/Id';

export default class ApprovalCard extends LightningElement {
    // this is the outer component containing ApprovalProcessReader, Submitter and ProgressBar
    // ...
    @api recordId;
    @api flexipageRegionWidth;

    // for testing, re-reference once approval record structure is clear
    submitterId = CURRENT_USER_ID;
    approvalProcessName = 'Approval Process Name';
    startDate = new Date().toISOString().substring(0, 10);
    status = 'Open';
    mode = 'Locked';
    
    // stub for testing
    listOfApprovers = [
        {approver:'Ben Dover', approverId:'0053O000008ZcaD', status:'Approved', approved:true, declined:false},
        {approver:'Anita Dick', approverId:'0053O000008ZcaE', status:'Pending', approved:false, declined:false},
        {approver:'Herr Reinsch', approverId: '0053O000008ZcaF', status:'Declined', approved:false, declined:true},
        {approver:'You', approverId: CURRENT_USER_ID, status:'Pending', approved:false, declined:false}
    ];

    get locked() {
        return (this.mode == 'Locked');
    }

    //ToDo, discuss if actions should be shown for other people as well
    get showApprovalActions() {
        let approvers = this.listOfApprovers;
        for(let i = 0; i < approvers.length; i++){
            if(approvers[i].approverId == CURRENT_USER_ID){
                return true;
            }
        }
        return false;
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