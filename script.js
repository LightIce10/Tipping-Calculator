// Input

document.getElementById("fifteenP").addEventListener("click", fifteenTip);
document.getElementById("twentyP").addEventListener("click", twentyTip);
document.getElementById("thirtyP").addEventListener("click", thirtyTip);
document.getElementById("fortyP").addEventListener("click", fortyTip);
document.getElementById("noP").addEventListener("click", noTip);
document.getElementById("myChoice").addEventListener("click", personalTip);
document.getElementById("reset").addEventListener("click", redo);

// Output

function fifteenTip() {
  let bill = +document.getElementById("insertBill").value;
  let total = 0.15 * bill + bill;
  document.getElementById("totalBill").innerHTML = total;
  console.log(total);
}

function twentyTip() {
  let bill = +document.getElementById("insertBill").value;
  let total = 0.2 * bill + bill;
  document.getElementById("totalBill").innerHTML = total;
  console.log(total);
}

function thirtyTip() {
  let bill = +document.getElementById("insertBill").value;
  let total = 0.3 * bill + bill;
  document.getElementById("totalBill").innerHTML = total;
  console.log(total);
}

function fortyTip() {
  let bill = +document.getElementById("insertBill").value;
  let total = 0.4 * bill + bill;
  document.getElementById("totalBill").innerHTML = total;
  console.log(total);
}

function noTip() {
  let bill = +document.getElementById("insertBill").value;
  let total = 0 * bill + bill;
  document.getElementById("totalBill").innerHTML = total;
  console.log(total);
}

function personalTip() {
  let bill = +document.getElementById("insertBill").value;
  let total = 0.15 * bill + bill;
  document.getElementById("totalBill").innerHTML = total;
  console.log(total);
}

function redo() {
  document.getElementsById("totalBill").innerHTML = "";
  document.getElementById("insertBill").innerHTML = "";
}
