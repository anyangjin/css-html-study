// const instagramLogo = document.getElementById("ins");
const apple = document.createElement("div");
const input = document.createElement("button");

apple.innerText = "안양진";
input.innerText = "제출하기";
input.id = "mango";

const onClick = () => {
  alert("양진 천재");
};

// document.querySelector("#mango").addEventListener("click", onClick);
input.addEventListener("click", onClick);

document.body.append(input);

document.body.append(apple);

// instagramLogo.addEventListener("click", function () {
//   alert("Hello world");
// });
