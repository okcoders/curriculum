    // ---- DATA STORAGE ----
    let expenses = [];


    // ---- CRUD FUNCTIONS ----

    function addExpense(description, amount, category) {
      const lastId = expenses.length > 0 ? expenses[expenses.length - 1].id : 0;
      const expense = {
        id: lastId + 1,
        description: description,
        amount: amount,
        category: category,
        date: new Date().toISOString().split('T')[0]
      };

      expenses.push(expense);

      return expense;
    }
    
    function deleteExpense(id) {
      const remaining = [];
      for (let i = 0; i < expenses.length; i++) {
        if (expenses[i].id !== id) {
          remaining.push(expenses[i]);
        }
      }
      expenses = remaining;
    }


    // ---- CALCULATIONS ----
    
    function calculateTotal(expenseList) {
      let sum = 0;
      for (let i = 0; i < expenseList.length; i++) {
        sum += expenseList[i].amount;
      }
      return sum;
    }


    // ---- RENDER UI ----
    
    function renderExpenses() {
      const tbody = document.querySelector("#expense-tbody");

      // Clear tbody
      tbody.innerHTML = "";

      if (expenses.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="text-center text-muted py-5">No expenses yet!</td></tr>';
      } else {
        // Render each expense as a table row
        for (let i = 0; i < expenses.length; i++) {
          const expense = expenses[i];
          const tr = document.createElement("tr");

          tr.innerHTML = `
            <th scope="row">${i + 1}</th>
            <td>${dateFormating(expense.date)}</td>
            <td>${expense.description}</td>
            <td>${expense.category}</td>
            <td>${formatCurrency(expense.amount)}</td>
            <td><button class="btn btn-sm delete-btn" data-id="${expense.id}">❌</button></td>
          `;

          tbody.appendChild(tr);
        }
      }

      // Update total
      const total = calculateTotal(expenses);
      document.querySelector("#total").textContent = formatCurrency(total);
    }
    
    
    // ---- EVENT HANDLERS ----
    
    // Form submit
    const form = document.querySelector("#expense-form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const description = document.querySelector("#description").value;
      const amount = parseFloat(document.querySelector("#amount").value);
      const category = document.querySelector("#category").value;
      
      // Validate
      const validation = validateExpense(description, amount, category);
      if (validation !== "Valid") {
        alert(validation);
        return;
      }
      
      // Add expense
      addExpense(description, amount, category);
      
      // Re-render
      renderExpenses();
      
      // Reset form
      form.reset();
    });

        // Delete button (event delegation)
    document.querySelector("#expense-list").addEventListener("click", function(event) {
      if (event.target.classList.contains("delete-btn")) {
        const id = Number(event.target.getAttribute("data-id"));
        deleteExpense(id);
        renderExpenses();
      }
    });

    // ---- HELPER FUNCTIONS ----
    function formatCurrency(amount) {
      return "$" + amount.toFixed(2);
    }

    function dateFormating(date){
      const dateObj = new Date(date) //create a date object so we have access to Date methods
      return dateObj.toLocaleDateString(); //format like 1/16/2025
    }

    // ---- VALIDATIONS ----
    function validateExpense(description, amount, category) {
      if (!description || description.trim() === "") {
        return "Description is required";
      }
      if (!amount || amount <= 0) {
        return "Amount must be greater than 0";
      }
      if (!category) {
        return "Category is required";
      }
      return "Valid";
    }


    // ---- INITIALIZE ----
    renderExpenses();