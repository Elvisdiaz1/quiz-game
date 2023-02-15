let timer = document.querySelector("#timer");
let body = document.body;
let game = document.querySelector("#game");
let answers = document.querySelector("#answers");
let button = document.querySelector("#button");
let answer1 = document.querySelector("#choice1");
let answer2 = document.querySelector("#choice2");
let answer3 = document.querySelector("#choice3");
let answer4 = document.querySelector("#choice4");

// let highScoreButton = document.querySelector("#high-score");

// Create
// let time = document.createElement("p");
let viewHighScoreButton = document.createElement("a");
viewHighScoreButton.setAttribute("id", "high-score");
viewHighScoreButton.setAttribute("href", "./high-score.html");

let questionsDiv = document.createElement("div");
questionsDiv.setAttribute("id", "questions");

let questionEl = document.createElement("p");
questionEl.setAttribute("class", "question");

let answersDiv = document.createElement("div");
answersDiv.setAttribute("class", "answers");

let listDiv = document.createElement("ul");
let listItem = document.createElement("li");
let listItem2 = document.createElement("li");
let listItem3 = document.createElement("li");
let listItem4 = document.createElement("li");

let button1 = document.createElement("button");
button1.setAttribute("id", "choice1");
button1.setAttribute("class", "choice");
let button2 = document.createElement("button");
button2.setAttribute("id", "choice2");
button2.setAttribute("class", "choice");
// button2.setAttribute("data-answer");
let button3 = document.createElement("button");
button3.setAttribute("id", "choice3");
button3.setAttribute("class", "choice");
// button3.setAttribute("data-answer");
let button4 = document.createElement("button");
button4.setAttribute("id", "choice4");
button4.setAttribute("class", "choice");
// button4.setAttribute("data-answer");

let number = 59;

// Build
timer.textContent = "Time: " + number + " secs";
questionEl.textContent = "What is the full name of HTML?";
button1.textContent = "Hyper Type Making Languague";
button2.textContent = "Hyper Text Markup Languague";
button3.textContent = " Happy Typing a Madeup Languague";
button4.textContent = "Hoping Text Markup Languague";

// Place
// body.appendChild(time);

// Functions

function setTime() {
  let timeCountingDown = setInterval(function () {
    number--;
    timer.textContent = "Time: " + number + " secs";

    if (number === 0) {
      clearInterval(timeCountingDown);
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  game.setAttribute("class", "visible");
  questionsDiv.setAttribute("class", "none");
  game.textContent = "You Lose";
  button.textContent = "Retry";
  viewHighScoreButton.textContent = "View High Scores";
  body.appendChild(viewHighScoreButton);
}

function startQuiz() {
  setTime();
  //   game.textContent = question1.question;
  //   answer1.textContent = question1.choice1;
  //   answer2.textContent = question1.choice2;
  //   answer3.textContent = question1.choice3;
  //   answer4.textContent = question1.choice4;
  //   playQuiz();
  //   generateList();
  game.setAttribute("class", "none");
  listItem.append(button1);
  listItem2.append(button2);
  listItem3.append(button3);
  listItem4.append(button4);
  listDiv.appendChild(listItem);
  listDiv.appendChild(listItem2);
  listDiv.appendChild(listItem3);
  listDiv.appendChild(listItem4);
  answersDiv.appendChild(listDiv);
  questionsDiv.appendChild(questionEl);
  questionsDiv.appendChild(answersDiv);
  body.appendChild(questionsDiv);
  questionsDiv.setAttribute("class", "visible");
  button1.setAttribute("data-answer", "incorrect-answer");
  button2.setAttribute("data-answer", "correct-answer");
  button3.setAttribute("data-answer", "incorrect-answer");
  button4.setAttribute("data-answer", "incorrect-answer");
  button2.setAttribute("data-status", "not-clicked");

  // game.appendChild(questionsDiv);
  playGame();
}

function playGame() {
  questionsDiv.addEventListener("click", function (event) {
    let element = event.target;
    let status = element.getAttribute("data-status");

    if (element.matches(".choice")) {
      // var state = element.getAttribute("data-state");
      var answerChoice = element.getAttribute("data-answer");

      if (answerChoice === "correct-answer") {
        element.setAttribute("data-status", "clicked");
      } else {
        number = number - 5;
        console.log("incorrect");
      }
    }
    if (status === "clicked") {
      questionEl.textContent = "What is the role of CSS?";
      button1.textContent = "To style the website";
      button2.textContent = "To do functions";
      button3.textContent = "To do nothing";
      button4.textContent = "To create chaos";

      button1.setAttribute("data-answer", "correct-answer");
      button2.setAttribute("data-answer", "incorrect-answer");

      button1.setAttribute("data-status", "not-clicked");
      playGamePt2();
      console.log("clicked");
    } else {
      number = number - 5;
      console.log("incorrect");
    }
  });
}
function playGamePt2() {
  questionsDiv.addEventListener("click", function (event) {
    let element = event.target;
    let status = element.getAttribute("data-status");

    if (element.matches(".choice")) {
      // var state = element.getAttribute("data-state");
      var answerChoice = element.getAttribute("data-answer");

      if (answerChoice === "correct-answer") {
        element.setAttribute("data-status", "clicked");
      } else {
        number = number - 5;
        console.log("incorrect");
      }
    }
    if (status === "clicked") {
      questionEl.textContent = "What does Array.push() do?";
      button1.textContent = "Pushes strings in an object";
      button2.textContent = " Creates functions in the array";
      button3.textContent =
        "Pushes items such as strings and numbers into a array";
      button4.textContent =
        "Pulls items such as strings and numbers from an array";

      button1.setAttribute("data-answer", "incorrect-answer2");
      button3.setAttribute("data-answer", "correct-answer");

      button3.setAttribute("data-status", "not-clicked");

      playGamePt3();
      console.log("clicked");
    } else {
      //   element.setAttribute("data-state", "hidden");
      //   element.textContent = "";
      console.log("incorrect");
    }
  });
}
function playGamePt3() {
  questionsDiv.addEventListener("click", function (event) {
    let element = event.target;
    let status = element.getAttribute("data-status");

    if (element.matches(".choice")) {
      // var state = element.getAttribute("data-state");
      var answerChoice = element.getAttribute("data-answer");

      if (answerChoice === "correct-answer") {
        element.setAttribute("data-status", "clicked");
      } else {
        //   element.setAttribute("data-state", "hidden");
        //   element.textContent = "";
        console.log("incorrect");
      }
    }
    if (status === "clicked") {
      game.setAttribute("class", "visible");
      questionsDiv.setAttribute("class", "none");
      game.textContent =
        "GAME IS FINISHED! Your time was " +
        number +
        " secs. Reload the page to try again.";

      console.log("clicked");
    } else {
      //   element.setAttribute("data-state", "hidden");
      //   element.textContent = "";
      console.log("incorrect");
    }
  });
}

button.addEventListener("click", startQuiz);
