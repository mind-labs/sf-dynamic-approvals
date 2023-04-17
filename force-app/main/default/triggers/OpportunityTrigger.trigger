trigger OpportunityTrigger on Opportunity(after update) {
    System.debug(JSON.serialize(Trigger.new[0]).length()); //Eine Standard-Opportunity hat einen Umfang von 693 Zeichen, das ganze auf ein größeres update mit mehreren Opportunities hochgerechnet könnte relativ schnell den Rahmen von 131k brechen
}
