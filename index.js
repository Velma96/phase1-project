const apiUrl = "http://localhost:3000/transactions";

// Elements
const form = document.getElementById("transaction-form");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const typeInput = document.getElementById("type");
const transactionsList = document.getElementById("transactions-list");
const balanceDisplay = document.getElementById("balance");
const incomeDisplay = document.getElementById("income");
const expensesDisplay = document.getElementById("expenses");
const searchInput = document.getElementById("search");
const toggleModeBtn = document.getElementById("toggle-mode");

// State
let transactions = [];

// Fetch and Render Transactions
document.addEventListener("DOMContentLoaded", fetchTransactions);

// Fetch Transactions from db.json
async function fetchTransactions() {
  const res = await fetch(apiUrl);
  transactions = await res.json();
  renderTransactions(transactions);
}

// Add Transaction
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const transaction = {
    id: Date.now(),
    description: descriptionInput.value,
    amount: parseFloat(amountInput.value),
    type: typeInput.value
  };
  await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(transaction)
  });
  fetchTransactions();
  form.reset();
});

// Search Transactions
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = transactions.filter(t =>
    t.description.toLowerCase().includes(query)
  );
  renderTransactions(filtered);
});

// Toggle Dark Mode
toggleModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Delete Transaction
async function deleteTransaction(id) {
  await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
  fetchTransactions();
}

// Render Transactions to DOM
function renderTransactions(data) {
  transactionsList.innerHTML = "";
  let income = 0, expenses = 0;

  data.forEach(t => {
    const listItem = document.createElement("li");
    listItem.className = t.type;
    listItem.innerHTML = `
      ${t.description} <span>${t.type === "income" ? "+" : "-"} KSh ${t.amount}</span>
      <button onclick="deleteTransaction(${t.id})">X</button>
    `;
    transactionsList.appendChild(listItem);

    if (t.type === "income") income += t.amount;
    else expenses += t.amount;
  });

  const balance = income - expenses;
  balanceDisplay.textContent = `Balance: KSh ${balance}`;
  incomeDisplay.textContent = `KSh ${income}`;
  expensesDisplay.textContent = `KSh ${expenses}`;
}
