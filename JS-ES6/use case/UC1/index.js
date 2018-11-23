function calc(...args) {
  // find math operator in given parameters
  var operator = [...args].sort()[0];
  // remove math operator from args array
  args.splice(args.indexOf(operator), 1);
  if (
    typeof args[0] !== "number" &&
    typeof args[0] !== "number" &&
    args[0] !== NaN &&
    args[1] !== NaN
  ) {
    console.log("You can only pass number inputs only");
    return false;
  }
  switch (operator) {
    case "+":
      console.log(args[0] + args[1]);
      break;
    case "-":
      console.log(args[0] - args[1]);
      break;
    case "*":
      console.log(args[0] * args[1]);
      break;
    case "/":
      console.log(args[0] / args[1]);
      break;
    case "%":
      console.log(args[0] % args[1]);
      break;
    case "**":
      console.log(args[0] ** args[1]);
      break;

    default:
      console.log("Given operation cant be performaed");
      break;
  }
}

calc(1, "+", 2);

calc("2", 3, "*", "-");

calc(2, 3, "*", "-");

calc(2, 3, "+");

calc(2, 2, "*");
