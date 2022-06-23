// Import stylesheets
import './style.css';
let form = document.forms["equation"];

// Write Javascript code!
function calculate(value1, value2, operation) {
  let sum = 0;
  if (operation == "+") {
    sum = value1 + value2;
  } else if (operation == "-") {
    sum = value1 - value2;
  } else if (operation == "*") {
  sum = value1 * value2;
  } else if (operation == "/") {
    sum = value1 / value2;
  };
  return sum;
};



form.onsubmit = () => {
  let val1 = parseInt(form["value1"].value);
  let val2 = parseInt(form["value2"].value);
  let opr = form["operation"].value
  console.log(calculate(val1, val2, opr))
};