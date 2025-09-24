let modal = document.getElementById("joke-modal");
let btn = document.getElementById("get-joke");
let span = document.getElementsByClassName("modal__close")[0];

btn.onclick = function() {
    document.getElementById("joke").innerHTML = `<span class="loading">👊</span>`;
    modal.style.display = "block";
    // getJoke("https://api.chucknorris.io/jokes/random");
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Chuck Norris Jokes API
async function getJoke(url) {
  try {
    const response = await fetch(url);
    const jokeObject = await response.json();
    const joke = jokeObject.value;
    document.getElementById("joke").innerHTML = joke;
  } catch (err) {
    console.error("Error connecting to the API: ", err);
  }
}