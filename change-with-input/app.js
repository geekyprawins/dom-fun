const h1 = document.querySelector("h1");
const input = document.querySelector("#change");

input.addEventListener("input", () => {
  if (input.value == "") {
    h1.innerText = "I will be changed...";
  } else h1.innerText = "Welcome, " + input.value;
});
