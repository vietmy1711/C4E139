let resultElement = document.getElementById("result");

const numberOneTriangle = (n) => {
  resultElement.innerHTML = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      resultElement.innerHTML += "*";
    }
    resultElement.innerHTML += "<br>";
  }
};
