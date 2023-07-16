import { LightningElement, wire, api } from 'lwc';

export default class ProgressIndicator extends LightningElement {
    // get struct with steps, approvals and users
    @api listOfApprovers;

    // width awareness
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
}