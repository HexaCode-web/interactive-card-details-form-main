const CardName = document.querySelector("#Name");
const CardNumber = document.querySelector("#Number");
const CardMM = document.querySelector("#MM");
const CardYY = document.querySelector("#YY");
const CardCVC = document.querySelector("#cvc");

const NameEmpty = document.querySelector("#NameEmpty");
const NumberEmpty = document.querySelector("#NumberEmpty");
const DateEmpty = document.querySelector("#DateEmpty");
const CVCEmpty = document.querySelector("#CVCEmpty");

const picCardNumber = document.querySelector("#CardNumber");
const picCardName = document.querySelector("#CardName");
const picCardDateMM = document.querySelector("#CardMM");
const picCardDateYY = document.querySelector("#CardYY ");
const picCardCVC = document.querySelector("#CVC");

const Form = document.querySelector(".info");
const Completed = document.querySelector(".completed");
function validate() {
  if (CardName.value === "") {
    NameEmpty.style.display = "inline";
    CardName.style.border = "2px solid red";
  } else {
    NameEmpty.style.display = "none";
    CardName.style.border = "2px solid black";
  }
  if (CardNumber.value === "") {
    NumberEmpty.style.display = "inline";
    CardNumber.style.border = "2px solid red";
  } else {
    NumberEmpty.style.display = "none";
    CardNumber.style.border = "2px solid black";
  }
  if (CardMM.value === "") {
    DateEmpty.style.display = "inline";
    CardMM.style.border = "2px solid red";
  } else {
    DateEmpty.style.display = "none";
    CardMM.style.border = "2px solid black";
  }
  if (CardYY.value === "") {
    DateEmpty.style.display = "inline";
    CardYY.style.border = "2px solid red";
  } else {
    DateEmpty.style.display = "none";
    CardYY.style.border = "2px solid black";
  }
  if (CardCVC.value === "") {
    CVCEmpty.style.display = "inline";
    CardCVC.style.border = "2px solid red";
  } else {
    CVCEmpty.style.display = "none";
    CardCVC.style.border = "2px solid black";
  }
  if (
    CardName.value !== "" &&
    CardNumber.value !== "" &&
    CardMM.value !== "" &&
    CardYY.value !== "" &&
    CardCVC.value !== ""
  ) {
    Action();
  } else {
    alert("fill out the form");
  }
}
function addNumber() {
  picCardNumber.innerText = CardNumber.value;
}
function addName() {
  picCardName.innerText = CardName.value;
}
function addDateMM() {
  picCardDateMM.innerText = CardMM.value;
}
function addDateYY() {
  picCardDateYY.innerText = CardYY.value;
}
function addCVC() {
  picCardCVC.innerText = CardCVC.value;
}
function Action() {
  Form.style.display = "none";
  Completed.style.display = "flex";
}
function Reload() {
  Form.style.display = "flex";
  Completed.style.display = "none";
}
