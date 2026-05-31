let income = 0;
let expenses = 0;

function updateUI(){
document.getElementById("incomeDisplay").textContent = "₹" + income;
document.getElementById("expenseDisplay").textContent = "₹" + expenses;
document.getElementById("balanceDisplay").textContent = "₹" + (income - expenses);
}

function addIncome(){
const amount = Number(document.getElementById("incomeInput").value);

if(amount > 0){
income += amount;
updateUI();
document.getElementById("incomeInput").value = "";
}
}

function addExpense(){
const name = document.getElementById("expenseName").value;
const category = document.getElementById("category").value;
const amount = Number(document.getElementById("expenseAmount").value);

if(name && amount > 0){

expenses += amount;

const li = document.createElement("li");

li.innerHTML = `
<strong>${name}</strong><br>
Category: ${category}<br>
Amount: ₹${amount}
`;

document.getElementById("expenseList").appendChild(li);

updateUI();

document.getElementById("expenseName").value="";
document.getElementById("expenseAmount").value="";
}
}

updateUI();
