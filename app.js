let name = prompt("enter your name Please:");

let gender = prompt("enter your gender Please(male or female):");

let age = prompt(" enter your age Please:");

if (age <= 0) {
  alert("Age cannot be zero or negative. Please enter a valid age.");
}

function askQuestions(question) {
  let answer = prompt(question + " (Yes/No):");
  if (answer === "") {
    answer = "invalid";
  }
  return answer;
}

function printAnswers(arr) {
  console.log("Answers:");
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

let answers = [];

answers.push(askQuestions("Do You Love the Quran?"));
answers.push(askQuestions("Have you ever visited Japan?"));
answers.push(askQuestions("Do you like to try new food?"));

printAnswers(answers);


let skipWelcomeMessage = confirm("Do you want to skip the welcoming message?");

if (!skipWelcomeMessage) {
  let title = "";
  if (gender === "male") {
    title = "Mr.";
  } else if (gender === "female") {
    title = "Ms.";
  }
  let message = title ? `Welcome ${title} ${name}!` : `Welcome ${name}!`;
  alert(message);
}
