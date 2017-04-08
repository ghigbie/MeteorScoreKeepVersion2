// import "./../imports/utils";
import someDefault, {greetUser, name} from "./../imports/utils";
import {addNumbers} from "./../imports/math";

console.log("Log from /client/main.js");
console.log(greetUser(name));
console.log(addNumbers(7, 3));
console.log(someDefault);
