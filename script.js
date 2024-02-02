document.getElementById("fifteenP").addEventListener("click", fifteenTip);
document.getElementById("twentyP").addEventListener("click", twentyTip);
document.getElementById("thirtyP").addEventListener("click", thirtyTip);
document.getElementById("fortyP").addEventListener("click", fortyTip);
document.getElementById("noP").addEventListener("click", noTip);
document.getElementById("myChoice").addEventListener("click", personalTip);
document.getElementById("reset").addEventListener("click", redo);

function fifteenTip() {
  let numberOfPeople = +document.getElementById("ttlPeople").value;
  let bill = +document.getElementById("insertBill").value;
  let total = 0.15 * bill + bill;
  let totalPerPerson = total / numberOfPeople;
  total = total.toFixed(2);
  totalPerPerson = totalPerPerson.toFixed(2);
  document.getElementById("perP").innerHTML = `$${totalPerPerson}`;
  document.getElementById("totalBill").innerHTML = `$${total}`;
}

function twentyTip() {
  let numberOfPeople = +document.getElementById("ttlPeople").value;
  let bill = +document.getElementById("insertBill").value;
  let total = 0.2 * bill + bill;
  let totalPerPerson = total / numberOfPeople;
  total = total.toFixed(2);
  totalPerPerson = totalPerPerson.toFixed(2);
  document.getElementById("perP").innerHTML = `$${totalPerPerson}`;
  document.getElementById("totalBill").innerHTML = `$${total}`;
}

function thirtyTip() {
  let numberOfPeople = +document.getElementById("ttlPeople").value;
  let bill = +document.getElementById("insertBill").value;
  let total = 0.3 * bill + bill;
  let totalPerPerson = total / numberOfPeople;
  total = total.toFixed(2);
  totalPerPerson = totalPerPerson.toFixed(2);
  document.getElementById("perP").innerHTML = `$${totalPerPerson}`;
  document.getElementById("totalBill").innerHTML = `$${total}`;
}

function fortyTip() {
  let numberOfPeople = +document.getElementById("ttlPeople").value;
  let bill = +document.getElementById("insertBill").value;
  let total = 0.4 * bill + bill;
  let totalPerPerson = total / numberOfPeople;
  total = total.toFixed(2);
  totalPerPerson = totalPerPerson.toFixed(2);
  document.getElementById("perP").innerHTML = `$${totalPerPerson}`;
  document.getElementById("totalBill").innerHTML = `$${total}`;
}

function noTip() {
  let numberOfPeople = +document.getElementById("ttlPeople").value;
  let bill = +document.getElementById("insertBill").value;
  let totalPerPerson = bill / numberOfPeople;
  bill = bill.toFixed(2);
  totalPerPerson = totalPerPerson.toFixed(2);
  document.getElementById("perP").innerHTML = `$${totalPerPerson}`;
  document.getElementById("totalBill").innerHTML = `$${bill}`;
}

function personalTip() {
  /* let numberOfPeople = +document.getElementById("perP").value;
  let bill = +document.getElementById("insertBill").value;
  let totalPerPerson = bill / numberOfPeople;
 let total = 0.15 * bill + billnumberOfPeople;
   total = total.toFixed(2);
  totalPerPerson = totalPerPerson.toFixed(2);
   document.getElementById("totalBill").innerHTML = `$ ${total}`;
   console.log(total); */

  personal = document.getElementById("customBTN");
  personal.innerHTML = `<button id="goBack">Go Back</button><p>
 Specific percentage: <input id="specifyPercent" type="number"></input>
</p>
<button id="ogPercent">Done</button><p>`;

  // Style
  document.getElementById("goBack").style.width = "30px";
  document.getElementById("goBack").style.margin = "20px";
  document.getElementById("goBack").style.padding = "20px";
  document.getElementById("goBack").style.fontSize = "15px";
  document.getElementById("goBack").style.textAlign = "center";

  document.getElementById("ogPercent").style.width = "25px";
  document.getElementById("ogPercent").style.margin = "20px";
  document.getElementById("ogPercent").style.padding = "15px";
  document.getElementById("ogPercent").style.fontSize = "10px";
  document.getElementById("ogPercent").style.textAlign = "center";
}

document.getElementById("ogPercent").addEventListener("click", personalPercent);

function personalPercent() {
  let percent = +document.getElementById("specifyPercent");
  let bill = +document.getElementById("insertBill");
  let numberOfPeople = +document.getElementById("ttlPeople");
  let total = (percent / 100) * bill + bill;
  totalPerPerson = total / numberOfPeople;
  bill = bill.toFixed(2);
  totalPerPerson = totalPerPerson.toFixed(2);
  document.getElementById("perP").innerHTML = `$${totalPerPerson}`;
  document.getElementById("totalBill").innerHTML = `$${bill}`;
}

function redo() {
  let tb = (document.getElementById("totalBill").innerHTML = "----");
  let ib = (document.getElementById("insertBill").value = "");
  let pp = (document.getElementById("perP").innerHTML = "----");
  let tp = (document.getElementById("ttlPeople").value = "");
}
