const commentForm = document.getElementById("comment-form"); // gets form element
const plusButton = document.getElementById("+");
const likeButton = document.getElementById("<3");
const minusButton = document.getElementById("-");

commentForm.addEventListener("submit", function(e) {
  e.preventDefault(); //prevents page reload
  const input = document.getElementById("comment-input"); //gets the input field from doc
  const val = input.value; //gets what's written in input field
  input.value = ""; //resets input field to ""
  const toAdd = document.createElement("p"); //creates new DOM object for insertion
  toAdd.innerText = val; //add input text into new object
  const list = document.getElementById("list").append(toAdd); //puts new object onto page
});

window.onload = doesEverything;

function doesEverything() {
  increaseNumber();
  createPlusButtonListener();
  createMinusButtonListener();
  createLikeButtonListener();
}

let paused = false;

const pauseButton = document.getElementById("pause");
pauseButton.addEventListener("click", function() {
  paused = paused ? false : true;
  if (paused) {
    pauseButton.innerText = "start";
    plusButton.disabled = true;
    minusButton.disabled = true;
    likeButton.disabled = true;
  } else {
    pauseButton.innerText = "pause";
    plusButton.disabled = false;
    minusButton.disabled = false;
    likeButton.disabled = false;
  }
});

function increaseNumber() {
  setInterval(function() {
    if (!paused) {
      document.getElementById("counter").innerText++;
    }
  }, 1000);
}

function createPlusButtonListener() {
  plusButton.addEventListener("click", function() {
    if (!paused) {
      document.getElementById("counter").innerText++;
    }
  });
}

function createMinusButtonListener() {
  minusButton.addEventListener("click", function() {
    if (!paused) {
      document.getElementById("counter").innerText--;
    }
  });
}

function createLikeButtonListener() {
  const likeCount = {};

  likeButton.addEventListener("click", function() {
    if (!paused) {
      likeCount[document.getElementById("counter").innerText] =
        ++likeCount[document.getElementById("counter").innerText] || 1;
    }
    const likeList = document.getElementById("likes");
    likeList.innerHTML = "";
    for (const num in likeCount) {
      likeList.innerHTML += `<li>The number ${num} has been liked ${likeCount[
        num
      ]} times</li>`;
    }
  });
}
