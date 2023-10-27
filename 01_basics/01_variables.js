const accountId = 14456
let accountEmail = "dhruti@google.com"
var accountPassword = "121212"
accountCity = "Vapi"
let accountState

// accountId= 2 // can't change const value
accountEmail = "dhruti@bob.com"
accountPassword="21212121"
accountCity="Ahmedabad"

/*
    Prefer not to use var to declare keywords
    use let, const only
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])