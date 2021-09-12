const jokes = document.querySelector(".jokes");
const button = document.querySelector("button");
const h1 = document.querySelector("h1");
const getDadJokes = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    // Using Axios as alternative to fetch
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    //   console.log(res.data.joke);
    return res.data.joke;
  } catch (e) {
    return "No jokes Daddy, try again :(";
  }
};

const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

// getDadJokes();
h1.style.color = "white";
document.body.style.textAlign = "center";
document.body.style.backgroundColor = "black";

button.addEventListener("click", async () => {
  const newLi = document.createElement("li");
  const newJoke = await getDadJokes();
  newLi.style.fontSize = "20px";
  newLi.style.color = makeRandomColor();
  newLi.append(newJoke);
  jokes.append(newLi);
  h1.style.color = makeRandomColor();
});
