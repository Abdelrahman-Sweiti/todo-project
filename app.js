let name = prompt("enter your name Please:");

let gender = prompt("enter your gender Please(male or female):");

let age = prompt(" enter your age Please:");

if (age <= 0) {
  alert("Age cannot be zero or negative. Please enter a valid age.");
}

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
