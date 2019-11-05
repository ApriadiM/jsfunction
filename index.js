//Function Backtik
function logName(name) {
  console.log(`Hello, ${name}!`);
}

const nameA = "Apriadi";
const nameB = "Maya";

logName(nameA);
logName(nameB);

//Function const
const checkAge = function(age) {
  if (age >= 18) {
    console.log("You are old enough");
  } else if (age < 18 && age >= 0) {
    console.log("You are still young");
  } else {
    console.log("You are not born yet");
  }
};

checkAge(10); // You are still young
checkAge(25); // You are old enough
checkAge(-2); // You are not born yet

//Function let for
const addMarks = (text, mark, times) => {
  let newText = text;

  for (let i = 0; i <= times; i++) {
    newText += mark;
  }

  console.log(newText);
};

addMarks("Hello", "!", 1); // Hello!
addMarks("Hello", "!", 3); // Hello!!!
addMarks("How are you", "?", 1); // How are you?
addMarks("How are you", "?", 2); // How are you??
