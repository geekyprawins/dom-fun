const delayedColorChanger = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};
const h1 = document.querySelector("h1");
h1.style.textAlign = "center";
const colors = [
  "orange",
  "yellow",
  "green",
  "pink",
  "blue",
  "lightblue",
  "cyan",
  "magenta",
  "grey",
  "indigo",
  "crimson",
  "darkorange",
  "teal",
  "springgreen",
  "azure",
  "bisque",
  "tan",
  "tomato",
  "black",
];
const intervalColorChanger = () => {
  setInterval(() => {
    // console.log("1s passed");
    var rand = Math.floor(Math.random() * colors.length);
    h1.style.color = colors[rand];
  }, 2000);
};
intervalColorChanger();
delayedColorChanger("red", 2000)
  .then(() => delayedColorChanger("orange", 2000))
  .then(() => delayedColorChanger("yellow", 2000))
  .then(() => delayedColorChanger("green", 2000))
  .then(() => delayedColorChanger("blue", 2000))
  .then(() => delayedColorChanger("indigo", 2000))
  .then(() => delayedColorChanger("violet", 2000));
