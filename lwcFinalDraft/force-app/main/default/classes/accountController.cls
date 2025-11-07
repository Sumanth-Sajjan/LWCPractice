public with sharing class accountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountRecords(String recordId){
        return [Select Id, Name, Rating, Phone, Industry from Account where Id=:recordId Limit 20];
    }
}