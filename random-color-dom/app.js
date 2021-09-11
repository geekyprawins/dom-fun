const h1 = document.querySelector("h1");
const button = document.querySelector("button");
document.body.style.textAlign = 'center';

const makeRandomColor = () => {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};
button.addEventListener("click", () => {
  document.body.style.backgroundColor =  makeRandomColor();
  h1.innerText = ` I am ${makeRandomColor()}`;
  h1.style.color = 'white';

});
