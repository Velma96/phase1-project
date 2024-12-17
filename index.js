const apiUrl = "http://localhost:3001/transactions";

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

// Fetch and Render Transactions on Load
document.addEventListener("DOMContentLoaded", fetchTransactions);

// Fetch Transactions from db.json
async function fetchTransactions() {
  try {
    const res = await fetch(apiUrl);
    transactions = await res.json();
    renderTransactions(transactions);
  } catch (error) {
    console.error("Error fetching transactions:", error);
  }
}

// Add Transaction
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const transaction = {
    id: Date.now(), // Unique ID for each transaction
    description: descriptionInput.value,
    amount: parseFloat(amountInput.value),
    type: typeInput.value
  };

  try {
    await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transaction)
    });

    fetchTransactions(); // Refresh transactions
    form.reset();
  } catch (error) {
    console.error("Error adding transaction:", error);
  }
});

// Delete Transaction using Event Delegation
transactionsList.addEventListener("click", async (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const id = e.target.dataset.id;

    try {
      await fetch(`${apiUrl}/${id}`, {
        method: "DELETE"
      });

      fetchTransactions(); // Refresh transactions
    } catch (error) {
      console.error(`Error deleting transaction with ID ${id}:`, error);
    }
  }
});

// Render Transactions to the DOM
function renderTransactions(data) {
  transactionsList.innerHTML = ""; // Clear existing list
  let income = 0, expenses = 0;

  data.forEach(t => {
    const listItem = document.createElement("li");
    listItem.className = t.type;

    listItem.innerHTML = `
      <span>${t.description} - ${t.type === "income" ? "+" : "-"} KSh ${t.amount}</span>
      <button class="delete-btn" data-id="${t.id}">Delete</button>
    `;
    transactionsList.appendChild(listItem);

    // Update totals
    if (t.type === "income") income += t.amount;
    else expenses += t.amount;
  });

  // Update Balance, Income, and Expenses
  const balance = income - expenses;
  balanceDisplay.textContent = `Balance: KSh ${balance}`;
  incomeDisplay.textContent = `KSh ${income}`;
  expensesDisplay.textContent = `KSh ${expenses}`;
}

// Search Transactions
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filteredTransactions = transactions.filter(t =>
    t.description.toLowerCase().includes(query)
  );
  renderTransactions(filteredTransactions);
});

// Toggle Dark Mode
toggleModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
