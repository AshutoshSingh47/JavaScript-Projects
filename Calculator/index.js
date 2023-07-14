let numbers = "";

let result = "";

let display = document.querySelector(".display");

let number = document.querySelectorAll(".number");

let operator = document.querySelectorAll(".operator");

//It checks for the digit clicked.
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", () => {
    if (number[i].getAttribute("value") != 0) {
      numbers += number[i].getAttribute("value");
      display.innerHTML = numbers;
    } else {
      numbers += number[i].getAttribute("value");
      display.innerHTML = numbers;
    }
  });
}

//It checks for the operator clicked.
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", () => {
    numbers += operator[i].getAttribute("value");
    display.innerHTML = numbers;
  });
}

//It evaluates the expression.
document.querySelector(".equal").addEventListener("click", () => {
  if (numbers == 0) {
    display.innerHTML = 0;
  } else {
    result = eval(numbers);
    display.innerHTML = result;
    numbers = result;
  }
});

//It clears the display panel.
document.querySelector(".clear").addEventListener("click", () => {
  display.innerHTML = 0;
  numbers = "";
  result = "";
});

//It clear the last entry on display panel.
document.querySelector(".clear-entry").addEventListener("click", () => {
  if (numbers == "") {
    numbers = 0;
    display.innerHTML = numbers;
  } else {
    numbers = numbers.slice(0, -1);
    display.innerHTML = numbers;
    if (numbers == "") {
      numbers = 0;
      display.innerHTML = numbers;
    }
  }
});
