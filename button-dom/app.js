var sec = document.getElementById("space");
function makeRandomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
for (let i = 0; i < 50; i++) {
  var btn = document.createElement("button");
  btn.innerText = "CLICK";
  sec.appendChild(btn);
}

var btns = document.querySelectorAll('button');

for(let btn of btns){

    btn.addEventListener("click", () => {
        btn.style.backgroundColor = makeRandomColor();
      });

}
