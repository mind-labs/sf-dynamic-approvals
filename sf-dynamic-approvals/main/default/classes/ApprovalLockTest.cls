@isTest
public class ApprovalLockTest {
    @isTest
    static void shouldReturnTrueBecauseRecordIdExistsInSetting() {
        Id opportunityId = ApprovalTestDataFactory.generateId(Opportunity.SObjectType);
        ApprovalLock__c lockOpportunity = new ApprovalLock__c(Name = opportunityId, IsKeepLockedAfterProcess__c = false);
        insert lockOpportunity;

        Test.startTest();
        System.assert(
            ApprovalLock.getInstance().isLocked(opportunityId),
            'ApprovalLock class did not successfully find the Custom Setting telling it that the Id is currently locked'
        );
        Test.stopTest();
    }

    @isTest
    static void shouldReturnFalseBecauseNothingThere() {
        Id opportunityId = ApprovalTestDataFactory.generateId(Opportunity.SObjectType);

        Test.startTest();
        System.assert(
            !ApprovalLock.getInstance().isLocked(opportunityId),
            'ApprovalLock class accidentally found that an Opp Id without Custom Setting for lock is locked'
        );
        Test.stopTest();
    }
}
