const buttonTira = document.getElementById("tira-button");

const days = document.getElementById("days");

const tiraHistory = document.getElementById("tira-history");

let historyList = [];

function tiraDays() {
  const tiraResult = Math.floor(Math.random() * 6) + 1;
  const tiraFace = getTiraFace(tiraResult);
  days.innerHTML = tiraFace;
  historyList.push(tiraResult);
  updateTiraHistory();
}

function updateTiraHistory() {
  tiraHistory.innerHTML = "R E K O R D";
  for (let i = 0; i < historyList.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Tira ${i + 1}: <span>${getTiraFace(
      historyList[i]
    )}</span>`;
    tiraHistory.appendChild(listItem);
  }
}

function getTiraFace(tiraResult) {
  switch (tiraResult) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
  }
}

buttonTira.addEventListener("click", () => {
  days.classList.add("tira-animation");
  setTimeout(() => {
    days.classList.remove("tira-animation");
    tiraDays();
  }, 1000);
});



const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const kolor = document.querySelector(".kolor");

btn.addEventListener('click', function(){
  let hexKolor = '#';
  for (let i = 0; i < 6; i++) {
    hexKolor += hex[getRandomNumber()];
  }

  kolor.textContent = hexKolor;
  document.body.style.backgroundColor = hexKolor;
});

function getRandomNumber()  {
  return Math.floor(Math.random() * hex.length);
}
