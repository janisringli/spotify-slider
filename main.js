const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const ten = document.getElementById("10");
const eleven = document.getElementById("11");
const twelve = document.getElementById("12");
const thirteen = document.getElementById("13");
const fourteen = document.getElementById("14");
const fivteen = document.getElementById("15");
const sixteen = document.getElementById("16");
const seveenteen = document.getElementById("17");
const eighteen = document.getElementById("18");
const nineteen = document.getElementById("19");
const twenty = document.getElementById("20");
const twentyOne = document.getElementById("21");
const twentyTwo = document.getElementById("22");
const twentyThree = document.getElementById("23");

function wontStopNow() {
  one.style.height = "11px";
  two.style.height = "53px";
  three.style.height = "46px";
  four.style.height = "32px";
  five.style.height = "18px";
  six.style.height = "53px";
  seven.style.height = "11px";
  eight.style.height = "60px";
  nine.style.height = "11px";
  ten.style.height = "46px";
  eleven.style.height = "25px";
  twelve.style.height = "60px";
  thirteen.style.height = "53px";
  fourteen.style.height = "39px";
  fivteen.style.height = "60px";
  sixteen.style.height = "46px";
  seveenteen.style.height = "11px";
  eighteen.style.height = "32px";
  nineteen.style.height = "60px";
  twenty.style.height = "11px";
  twentyOne.style.height = "60px";
  twentyTwo.style.height = "11px";
  twentyThree.style.height = "11px";
}
function sinkingDeep() {
  one.style.height = "11px";
  two.style.height = "25px";
  three.style.height = "53px";
  four.style.height = "46px";
  five.style.height = "53px";
  six.style.height = "46px";
  seven.style.height = "18px";
  eight.style.height = "53px";
  nine.style.height = "11px";
  ten.style.height = "18px";
  eleven.style.height = "18px";
  twelve.style.height = "60px";
  thirteen.style.height = "32px";
  fourteen.style.height = "32px";
  fivteen.style.height = "53px";
  sixteen.style.height = "18px";
  seveenteen.style.height = "39px";
  eighteen.style.height = "39px";
  nineteen.style.height = "46px";
  twenty.style.height = "32px";
  twentyOne.style.height = "32px";
  twentyTwo.style.height = "39px";
  twentyThree.style.height = "11px";
}
var oldNumber;
// save the functions
// references in an array
const funcsArr = [wontStopNow, sinkingDeep];

function nextSong() {
  // Loop through each array elements (funtions references)
  // and invoke the funtio
  var randomNumber = Math.floor(Math.random() * funcsArr.length);
  console.log(randomNumber);
  if (oldNumber == randomNumber) {
    nextSong();
    console.log("same number");
  } else {
    funcsArr[randomNumber]();
    oldNumber = randomNumber;
    console.log(oldNumber);
  }
}
