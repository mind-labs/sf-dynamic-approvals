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
        {approver:'Ben Dover', approverId:'0053O000008ZcaD', status:'Approved', approved:true, rejected:false},
        {approver:'Anita Dick', approverId:'0053O000008ZcaE', status:'Pending', approved:false, rejected:false},
        {approver:'Herr Reinsch', approverId: '0053O000008ZcaF', status:'Rejected', approved:false, rejected:true},
        {approver:'Mike Oxlong', approverId: '0053O000008ZcaG', status:'Approved', approved:true, rejected:false}
    ];

    get locked() {
        return (this.mode == 'Locked');
    }

    get showSubmitterActions() {
        return (CURRENT_USER_ID == this.submitterId);
    }

    //ToDo, discuss if actions should be shown for other people as well
    get showApproverActions() {
        let approvers = this.listOfApprovers;
        for(let i = 0; i < approvers.length; i++){
            if(approvers[i].approverId == CURRENT_USER_ID){
                return true;
            }
        }
        return false;
    }

    temp_makeMeApprover() {
        this.listOfApprovers.push(
            {approver:'Current User', approverId: CURRENT_USER_ID, status:'Pending', approved:false, rejected:false}
        );
    }
}