
//regular expressions
//password policy

var text = "@shakeeb1234"; //true
var result = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/.test(text);
//condition of having at least one number and one special character using lookahead assertion
console.log("pattern match",result);

var text = "@shakeeb"; //false
var result = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/.test(text);
//condition of having at least one number and one special character using lookahead assertion
console.log("pattern match",result);

var text = "shakeeb1234"; //false
var result = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/.test(text);
//condition of having at least one number and one special character using lookahead assertion
console.log("pattern match",result);