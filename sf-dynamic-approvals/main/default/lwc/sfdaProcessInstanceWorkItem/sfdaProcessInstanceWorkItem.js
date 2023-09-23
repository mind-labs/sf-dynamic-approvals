import { LightningElement, api } from 'lwc';

export default class SfdaProcessInstanceWorkItem extends LightningElement {
    @api approvalRecord
    @api startDate
    @api itemStatus
    @api approvalMode
}