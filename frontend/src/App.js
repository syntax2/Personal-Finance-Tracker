import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/expenses')
      .then(response => {
        setExpenses(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Personal Finance Tracker</h1>
        <h2>Expenses</h2>
        <ul>
          {expenses.map(expense => (
            <li key={expense.id}>
              {expense.description}: ${expense.amount}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
