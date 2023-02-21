let gScore = 0
let hScore  = 0

let scoreH = document.getElementById("scoreH-el");
let scoreG = document.getElementById("scoreG-el");

function hs1(){
  hScore += 1;
  scoreH.textContent = hScore;
}
function hs2(){
  hScore += 2;
  scoreH.textContent = hScore;
}
function hs3(){
  hScore += 3;
  scoreH.textContent = hScore;
}
function gs1(){
  gScore += 1;
  scoreG.textContent = gScore;
}
function gs2(){
  gScore += 2;
  scoreG.textContent = gScore;
}
function gs3(){
  gScore += 3;
  scoreG.textContent = gScore;
}

function newGame(){
  scoreG.textContent = 0;
  scoreH.textContent = 0;
}



