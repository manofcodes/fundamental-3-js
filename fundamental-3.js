let n = parseInt(prompt("input a number to add by 7", ""), 10);
function add7(n) {
  return n + 7;
}
console.log(add7(n));
alert(add7(n));
let x = parseInt(prompt("input a number for multiplication", ""), 10);
let y = parseInt(prompt("input a second number for multiplication", ""), 10);
function multiply(x, y) {
  return x * y;
}
console.log(multiply(x, y));
alert(multiply(x, y));
let identity = prompt("Enter your name", "");
function capitalize() {
  let take1 = identity.charAt(0);
  let take2 = take1.toUpperCase();
  let out1 = identity.slice(1);
  let join = take2.concat("", out1);
  return join;
}
console.log(capitalize(identity));
alert(capitalize(identity));
function airletter() {
  last = identity.substr(-1);
  return last;
}
console.log(airletter(identity));
alert(airletter(identity));

let answer = parseInt(
  prompt("Please enter the number you would like to FizzBuzz up to: ")
);
for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
