public with sharing class ApprovalDispatcher {
    public static void run(List<SObject> newObjects, List<SObject> oldObjects) {
        List<ApprovalEvent__e> newApprovalEvents = new List<ApprovalEvent__e>();

        for (SObject obj : newObjects) {
            if (oldObjects == null) {
                newApprovalEvents.add(new ApprovalEvent__e());
            }
            if (ApprovalLock.getInstance().isLocked(obj.Id)) {
                obj.addError(Label.SFDARecordLocked);
            }
        }

        if (newApprovalEvents.size() > 0) {
            EventBus.publish(newApprovalEvents);
        }
    }
}
