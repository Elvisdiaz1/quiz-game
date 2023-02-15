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

  button1.setAttribute("data-answer", "incorrect-answer");
  button2.setAttribute("data-answer", "correct-answer");
  button3.setAttribute("data-answer", "incorrect-answer");
  button4.setAttribute("data-answer", "incorrect-answer");
  button2.setAttribute("data-status", "not-clicked");

  // game.appendChild(questionsDiv);
  // playGame();
}

function playGame() {
  questionsDiv.addEventListener("click", function (event) {
    let element = event.target;

    if (element.matches(".choice")) {
      // var state = element.getAttribute("data-state");
      var answerChoice = element.getAttribute("data-answer");
      let status = element.getAttribute("data-status");
      if (answerChoice === "correct-answer") {
        element.setAttribute("data-status", "clicked");
        if (status === "clicked") {
          console.log("clicked");
        }
      } else {
        //   element.setAttribute("data-state", "hidden");
        //   element.textContent = "";
        console.log("incorrect");
      }
    }
  });

  let questionContainer2 = document.querySelector("#question2");
  questionContainer2.addEventListener("click", function (event) {
    let element = event.target;

    if (element.matches(".choice2")) {
      // var state = element.getAttribute("data-state");
      var answerChoice2 = element.getAttribute("data-answer");
      let status = element.getAttribute("data-status");
      if (answerChoice2 === "correct-answer") {
        element.setAttribute("data-status", "clicked");
        if (status === "clicked") {
          console.log("clicked");
        }
      } else {
        //   element.setAttribute("data-state", "hidden");
        //   element.textContent = "";
        console.log("incorrect");
      }
    }
  });

  let questionContainer3 = document.querySelector("#question3");
  questionContainer3.addEventListener("click", function (event) {
    let element = event.target;

    if (element.matches(".choice3")) {
      // var state = element.getAttribute("data-state");
      var answerChoice3 = element.getAttribute("data-answer");
      let status = element.getAttribute("data-status");
      if (answerChoice3 === "correct-answer") {
        element.setAttribute("data-status", "clicked");
        if (status === "clicked") {
          console.log("clicked");
          game.textContent = "game done. Your time was " + number + " secs";
        }
        //   element.textContent = text;
        console.log("correct");
      } else {
        //   element.setAttribute("data-state", "hidden");
        //   element.textContent = "";
        console.log("incorrect");
      }
    }
  });
}

button.addEventListener("click", startQuiz);
