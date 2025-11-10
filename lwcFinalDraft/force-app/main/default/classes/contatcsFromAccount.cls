public with sharing class contatcsFromAccount {
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> contactRecords(String accountId){
        return [SELECT Id, Name, Email, Phone FROM Contact WHERE AccountId=:accountId limit 20];
    }
   
    
}