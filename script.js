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
  let numberOfPeople = +document.getElementById("ttlPeople").value;
  let bill = +document.getElementById("insertBill").value;
  let total = 0.15 * bill + bill;
  let totalPerPerson = total / numberOfPeople;
  document.getElementById("perP").innerHTML = totalPerPerson;
  document.getElementById("totalBill").innerHTML = total;
}

function twentyTip() {
  let numberOfPeople = +document.getElementById("ttlPeople").value;
  let bill = +document.getElementById("insertBill").value;
  let total = 0.2 * bill + bill;
  let totalPerPerson = total / numberOfPeople;
  document.getElementById("perP").innerHTML = totalPerPerson;
  document.getElementById("totalBill").innerHTML = total;
}

function thirtyTip() {
  let numberOfPeople = +document.getElementById("ttlPeople").value;
  let bill = +document.getElementById("insertBill").value;
  let total = 0.3 * bill + bill;
  let totalPerPerson = total / numberOfPeople;
  document.getElementById("perP").innerHTML = totalPerPerson;
  document.getElementById("totalBill").innerHTML = total;
}

function fortyTip() {
  let numberOfPeople = +document.getElementById("ttlPeople").value;
  let bill = +document.getElementById("insertBill").value;
  let total = 0.4 * bill + bill;
  let totalPerPerson = total / numberOfPeople;
  document.getElementById("perP").innerHTML = totalPerPerson;
  document.getElementById("totalBill").innerHTML = total;
}

function noTip() {
  let numberOfPeople = +document.getElementById("ttlPeople").value;
  let bill = +document.getElementById("insertBill").value;
  let totalPerPerson = bill / numberOfPeople;
  document.getElementById("perP").innerHTML = totalPerPerson;
  document.getElementById("totalBill").innerHTML = bill;
}

function personalTip() {
  let numberOfPeople = +document.getElementById("perP").value;
  let bill = +document.getElementById("insertBill").value;
  let total = 0.15 * bill + billnumberOfPeople;
  document.getElementById("totalBill").innerHTML = total;
  console.log(total);
}

function redo() {
  let tb = (document.getElementById("totalBill").innerHTML = "----");
  let ib = (document.getElementById("insertBill").value = "");
  let pp = (document.getElementById("perP").innerHTML = "----");
  let tp = (document.getElementById("ttlPeople").value = "");
}
