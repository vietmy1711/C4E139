let resultElement = document.getElementById("result");

const calculate = (num1, num2) => {
  let a = Number(num1);
  let b = Number(num2);

  if (isNaN(a) || isNaN(b) || !Number.isInteger(a) || !Number.isInteger(b)) {
    resultElement.innerHTML = "Vui lòng kiểm tra lại nhập liệu";
    return;
  }
  let sum = 0;
  for (let current = a; current <= b; current++) {
    if (isPrime(current)) {
      sum += current;
    }
  }
  resultElement.innerHTML = sum;
};

const isPrime = (n) => {
  if (n === 1) return false;
  if (n <= 3) return true;
  for (let i = 2, sqrtOfN = Math.sqrt(n); i <= sqrtOfN; i++) {
    if (n % i === 0) return false;
  }
  return true;
};
