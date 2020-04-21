const signupButton = document.getElementById("signup-button");
const form = document.getElementById("signup-form");
const thanks = document.getElementById("thanks");

const pearson = document.getElementById("pearson");

let clicks = 0;

window.onload = function () {
  if (JSON.parse(localStorage.getItem("submitted"))) {
    console.log("added");
    form.classList.add("hidden");
    thanks.classList.remove("hidden");
  }
};

form.addEventListener("submit", (e) => {
  //when submitting form, set submitted to true in local storage
  e.preventDefault();
  localStorage.setItem("submitted", true);

  //if submitted is true in local storage, remove form and add thanks for signing up
});

//Secret way to clear local storage and unlock form again
pearson.addEventListener("click", (e) => {
  clicks++;
  if (clicks >= 5) {
    localStorage.clear();
    form.classList.remove("hidden");
    thanks.classList.add("hidden");
    clicks = 0;
  }
});

// let submitCount = 0;
// let count = [];

// signupButton.addEventListener("click", (e) => {
//   submitCount++;
//   count.push(submitCount);

//   if (count.length > 10) {
//     const form = document.getElementById("signup-form");
//     form.classList.add("hidden");
//   }

//   console.log(submitCount);
//   console.log(count);
//   e.preventDefault();
// });
