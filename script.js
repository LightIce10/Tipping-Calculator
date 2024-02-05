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
  personal = document.getElementById("customBTN");
  personal.innerHTML = `<div id="customBTNChange" ><button id="goBack" onclick="goCustomBTN()">Back</button><p id="sP">
 Specific percentage: <input id="specifyPercent" type="number"></input>
</p>
<button id="ogPercent" onclick="personalPercent()">Done</button></div>`;

  // Style
  document.getElementById("goBack").style.width = "100px";
  document.getElementById("goBack").style.margin = "5px";
  document.getElementById("goBack").style.padding = "20px";
  document.getElementById("goBack").style.fontSize = "15px ";
  document.getElementById("goBack").style.textAlign = "center";

  document.getElementById("ogPercent").style.width = "100px";
  document.getElementById("ogPercent").style.margin = "5px";
  document.getElementById("ogPercent").style.padding = "15px";
  document.getElementById("ogPercent").style.fontSize = "15px";
  document.getElementById("ogPercent").style.textAlign = "center";

  document.getElementById("customBTNChange").style.textAlign = "center";
  document.getElementById("customBTNChange").style.width = "250px";
  document.getElementById("customBTNChange").style.margin = "5px";
  document.getElementById("customBTNChange").style.padding = "20px";
}

function IHaveASay() {
  custom = personalTip();
  console.log("custom");
}

function personalPercent() {
  let percent = +document.getElementById("specifyPercent").value;
  let bill = +document.getElementById("insertBill").value;
  let numberOfPeople = +document.getElementById("ttlPeople").value;

  let total = (percent / 100) * bill + bill;
  totalPerPerson = total / numberOfPeople;

  total.toFixed(2);
  totalPerPerson = totalPerPerson.toFixed(2);

  document.getElementById("perP").innerHTML = `$${totalPerPerson}`;
  document.getElementById("totalBill").innerHTML = `$${total}`;

  console.log(total);
  console.log(totalPerPerson);
}

function goCustomBTN() {
  document.getElementById("second-row").innerHTML = `
    <td><button class="forty" id="fortyP">40%</button></td>
    <td><button class="zero" id="noP">No Tip</button></td>
    <td><div id="customBTN"><button onclick="personalTip()" class="personal" id="myChoice">Custom</button></div></td>
  `;
}

function redo() {
  let tb = (document.getElementById("totalBill").innerHTML = "----");
  let ib = (document.getElementById("insertBill").value = "");
  let pp = (document.getElementById("perP").innerHTML = "----");
  let tp = (document.getElementById("ttlPeople").value = "");

  document.getElementById("second-row").innerHTML = `
      <td><button class="forty" id="fortyP">40%</button></td>
      <td><button class="zero" id="noP">No Tip</button></td>
      <td><div id="customBTN"><button onclick="personalTip()" class="personal" id="myChoice">Custom</button></div></td>
    `;
}
