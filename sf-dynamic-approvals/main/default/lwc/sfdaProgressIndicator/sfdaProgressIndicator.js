import { LightningElement, api } from 'lwc';
import CURRENT_USER_ID from '@salesforce/user/Id';

export default class ProgressIndicator extends LightningElement {
    // get struct with steps, approvals and users
    approvalSteps;
    _listOfApprovers;
    @api 
    get listOfApprovers(){
        return this._listOfApprovers;
    }
    set listOfApprovers(values){
        this._listOfApprovers = values;
        let _approvalSteps = [];
        // add additional attributes for highlighting to component local variable
        for(let i = 0; i < values.length; i++){
            let approver = values[i];
            let approvalStep = {};
            if(approver && 'approverId' in approver === true && approver.approverId){
                approvalStep.approved = approver.approved;
                approvalStep.rejected = approver.rejected;
                approvalStep.approverId = approver.approverId;
                if(approver.approverId == CURRENT_USER_ID){
                    approvalStep.isCurrentApprover = true;
                    approvalStep.approver = 'You';
                } else {
                    approvalStep.isCurrentApprover = false;
                    approvalStep.approver = approver.approver;
                }
                
            }
            _approvalSteps.push(approvalStep);
        }
        this.approvalSteps = _approvalSteps;
    }


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
        switch(value) {
            case 'SMALL':
                this.renderSmallSize = true;
                this.renderSize = 'x-small';
                break;
            case 'MEDIUM':
                this.renderMediumSize = true;
                this.renderSize = 'small';
                break;
            default:
                this.renderLargeSize = true;
                this.renderSize = 'medium';
        }
    }
}