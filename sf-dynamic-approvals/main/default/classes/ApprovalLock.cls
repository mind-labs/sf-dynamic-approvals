public class ApprovalLock {
    public static ApprovalLock instance;
    Map<String, ApprovalLock__c> settings;

    public ApprovalLock() {
        this.settings = ApprovalLock__c.getAll();
    }

    public static ApprovalLock getInstance() {
        if (instance == null) {
            instance = new ApprovalLock();
        }
        return instance;
    }

    public Boolean isLocked(Id recordId) {
        return this.settings.containsKey(recordId);
    }
}
