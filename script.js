let btn = document.getElementById("get-joke");
let oCount = 1;

// btn.addEventListener(click, () => {
//   const jokeEl = document.getElementById("joke");
//   jokeEl.innerHTML = `<span class="loading">👊</span>`;
//   getJoke("https://api.chucknorris.io/jokes/random");
//   btn.textContent = `I Need M${"o".repeat(oCount)}re!`;
//   oCount++;
// })

btn.onclick = function() {
    document.getElementById("joke").innerHTML = `<span class="loading">👊</span>`;
    getJoke("https://api.chucknorris.io/jokes/random");
    btn.innerHTML = `I Need M${"o".repeat(oCount)}re!`;
    oCount++;
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