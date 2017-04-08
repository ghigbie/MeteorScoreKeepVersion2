// import "./../imports/utils";
import someDefault, {greetUser, name} from "./../imports/utils";
import defaultFunction, {addNumbers} from "./../imports/math";

console.log(`Log from /server/main.js`);
console.log(greetUser(name));
console.log(addNumbers(4, 5));
console.log(someDefault);
console.log(defaultFunction(8));
