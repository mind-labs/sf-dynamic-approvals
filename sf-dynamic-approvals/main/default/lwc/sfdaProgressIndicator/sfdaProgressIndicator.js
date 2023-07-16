import { LightningElement, wire, api } from 'lwc';

export default class ProgressIndicator extends LightningElement {
    // get struct with steps, approvals and users
    approvalSteps;

    renderSize;
    renderSmallSize = false;
    renderMediumSize = false;
    renderLargeSize = false;

    @api approvalRecordId;
    @api 
    get currentSize(){
        return this.renderSize;
    }
    set currentSize(value){
        console.log(value);
        this.renderSize = value;
        switch(value) {
            case 'SMALL':
                this.renderSmallSize = true;
                break;
            case 'MEDIUM':
                this.renderMediumSize = true;
                break;
            default:
                this.renderLargeSize = true;
        }
    }

    // TODO retrieve approval steps via 'approvalRecordId'
    // Mock
    approvalSteps = [
        {approver:'Ben Dover', status:'Approved', approved:true, declined:false},
        {approver:'Anita Dick', status:'Pending', approved: false, declined:false},
        {approver:'Herr Reinsch', status:'Declined', approved: false, declined:true}
    ];
}