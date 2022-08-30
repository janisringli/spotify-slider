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
const seventeen = document.getElementById("17");
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
  seventeen.style.height = "11px";
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
  seventeen.style.height = "39px";
  eighteen.style.height = "39px";
  nineteen.style.height = "46px";
  twenty.style.height = "32px";
  twentyOne.style.height = "32px";
  twentyTwo.style.height = "39px";
  twentyThree.style.height = "11px";
}
function boldlyIApproach() {
  one.style.height = "11px";
  two.style.height = "46px";
  three.style.height = "18px";
  four.style.height = "39px";
  five.style.height = "11px";
  six.style.height = "32px";
  seven.style.height = "39px";
  eight.style.height = "11px";
  nine.style.height = "46px";
  ten.style.height = "39px";
  eleven.style.height = "11px";
  twelve.style.height = "60px";
  thirteen.style.height = "39px";
  fourteen.style.height = "60px";
  fivteen.style.height = "60px";
  sixteen.style.height = "32px";
  seventeen.style.height = "18px";
  eighteen.style.height = "53px";
  nineteen.style.height = "39px";
  twenty.style.height = "39px";
  twentyOne.style.height = "46px";
  twentyTwo.style.height = "25px";
  twentyThree.style.height = "11px";
}
function thisIsAmazingGrace() {
  one.style.height = "11px";
  two.style.height = "25x";
  three.style.height = "25px";
  four.style.height = "25px";
  five.style.height = "39px";
  six.style.height = "39px";
  seven.style.height = "25px";
  eight.style.height = "25px";
  nine.style.height = "25px";
  ten.style.height = "11px";
  eleven.style.height = "32px";
  twelve.style.height = "60px";
  thirteen.style.height = "53px";
  fourteen.style.height = "60px";
  fivteen.style.height = "32px";
  sixteen.style.height = "46px";
  seventeen.style.height = "18px";
  eighteen.style.height = "39px";
  nineteen.style.height = "18px";
  twenty.style.height = "53px";
  twentyOne.style.height = "39px";
  twentyTwo.style.height = "32px";
  twentyThree.style.height = "11px";
}
var oldNumber;
// save the functions
// references in an array
const funcsArr = [
  wontStopNow,
  sinkingDeep,
  boldlyIApproach,
  thisIsAmazingGrace,
];

function nextSong() {
  // Loop through each array elements (funtions references)
  // and invoke the funtio
  var randomNumber = Math.floor(Math.random() * funcsArr.length);
  if (oldNumber == randomNumber) {
    nextSong();
  } else {
    funcsArr[randomNumber]();
    oldNumber = randomNumber;
  }
}

function randomSong() {
  var heightArr = [
    "11px",
    "18px",
    "25px",
    "32px",
    "39px",
    "46px",
    "53px",
    "60px",
  ];
  for (let i = 2; i < 22; i++) {
    let random = Math.floor(Math.random() * heightArr.length);
    const currentStripe = document.getElementById(i);
    currentStripe.style.height = heightArr[random];
  }
}
