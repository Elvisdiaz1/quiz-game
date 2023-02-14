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

let choices = [
  "Hyper Type Making Languague",
  "Hyper Text Markup Languague",
  "Happy Typing a Madeup Languague",
  "Hamburger Tuna Mayo and Lettuce",
];
function generateList() {
  let list = document.createElement("ul");

  choices.forEach((item) => {
    let listItems = document.createElement("li");
    let listItemButtons = document.createElement("button");
    listItemButtons.innerHTML = item;
    listItems.append(listItemButtons);
    list.append(listItems);
  });
  answers.appendChild(list);
}

let question1 = {
  question: "What is the full name of HTML?",
  choice1: "Hyper Type Making Languague",
  choice2: "Hyper Text Markup Languague",
  choice3: "Happy Typing a Madeup Languague",
  choice4: "Hamburger Tuna Mayo and Lettuce",
  answer: "Hyper Text Markup Languague",
};

// let question = "What is the full name of HTML?";
// let choice1 = "Hyper Type Making Languague";
// let choice2 = "Hyper Text Markup Languague";
// let choice3 = "Happy Typing a Madeup Languague";
// let choice4 = "Hamburger Tuna Mayo and Lettuce";

let number = 59;

// Build
timer.textContent = "Time: " + number + " secs";

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
  playGame();
}

button.addEventListener("click", startQuiz);
answer1.addEventListener("click", function (event) {
  let user = event.target;
  let question1 = {
    question: "What is the full name of HTML?",
    choice1: "Hyper Type Making Languague",
    choice2: "Hyper Text Markup Languague",
    choice3: "Happy Typing a Madeup Languague",
    choice4: "Hamburger Tuna Mayo and Lettuce",
    answer: "Hyper Text Markup Languague",
  };

  //   console.log(question1);

  console.log(user);
});

function playGame() {
  let questionContainer = document.querySelector("#question1");
  questionContainer.addEventListener("click", function (event) {
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
          game.textContent = "game done";
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
