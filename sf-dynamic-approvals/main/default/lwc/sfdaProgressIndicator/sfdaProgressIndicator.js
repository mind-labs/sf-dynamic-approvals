import { LightningElement, wire, api } from 'lwc';

export default class ProgressIndicator extends LightningElement {
    // get struct with steps, approvals and users
    approvalSteps;

    @api approvalRecordId;

    // TODO retrieve approval steps via 'approvalRecordId'
    // Mock
    approvalSteps = [
        {approver:'Ben Dover', status:'Approved', approved:true, declined:false},
        {approver:'Anita Dick', status:'Pending', approved: false, declined:false},
        {approver:'Herr Reinsch', status:'Declined', approved: false, declined:true}
    ];
}