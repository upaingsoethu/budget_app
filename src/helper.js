export const waait = () => new Promise((resolve) => setTimeout(resolve, 1000));

const generateRandomColor = () => {
  const existingBudgetLength = fetchData("budgets")?.length ?? 0;
  return `${existingBudgetLength * 34} 65% 50%`;
};

export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const deleteData = (key) => {
  return localStorage.removeItem(key);
};

export const createBudget = ({ name, amount }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    amount: +amount,
    createdAt: Date.now(),
    color: generateRandomColor(),
  };
  const existingBudgets = fetchData("budgets") ?? [];
  return localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudgets, newItem])
  );
};

export const createExpense = ({ name, amount, budgetId }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    amount: +amount,
    createdAt: Date.now(),
    budgetId: budgetId,
  };
  const existingExpenses = fetchData("expenses") ?? [];
  return localStorage.setItem(
    "expenses",
    JSON.stringify([...existingExpenses, newItem])
  );
};

// Format currency
export const formatCurrency = (amt) => {
  return amt.toLocaleString(undefined, {
    style: "currency",
    currency: "MMK",
  });
};

// total spent by budget
export const calculateSpentByBudget = (budgetId) => {
  const expenses = fetchData("expenses") ?? [];
  const budgetSpent = expenses.reduce((acc, expense) => {
    // check if expense.id === budgetId I passed in
    if (expense.budgetId !== budgetId) return acc;

    // add the current amount to my total
    return (acc += expense.amount);
  }, 0);
  return budgetSpent;
};

// Formating percentages
export const formatPercentage = (amt) => {
  return amt.toLocaleString(undefined, {
    style: "percent",
    miniumFractionDigit: 0,
  });
};

// FORMATTING
export const formatDateToLocaleString = (epoch) =>
  new Date(epoch).toLocaleDateString();
