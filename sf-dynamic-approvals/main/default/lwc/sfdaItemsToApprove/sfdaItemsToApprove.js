import { LightningElement } from 'lwc';

export default class SfdaItemsToApprove extends LightningElement {
    // load piwi items
    
    // create piwi item wrapper
    // placeholder
    piwiItems = [
        {approvalRecord : '001', startDate : '2023-09-23T13:30:00Z', itemStatus : 'Status', approvalMode : 'YC'},
        {approvalRecord : '002', startDate : '2023-09-21T12:22:00Z', itemStatus : 'Status', approvalMode : 'FCFS'},
        {approvalRecordP : '003', startDate : '2023-09-22T09:16:00Z', itemStatus : 'Status', approvalMode : 'YC'},
    ];
}