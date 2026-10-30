        const billInput = document.getElementById("billAmount");
        const button = document.getElementById("calculateBtn");
        const tipDisplay = document.getElementById("tipResult");
        const totalDisplay = document.getElementById("totalResult");
        const errorDisplay = document.getElementById("error");


        button.addEventListener("click", function() {

            const bill = parseFloat(billInput.value);

            if (billInput.value.trim() === "" || isNaN(bill) || bill < 0) {
                errorDisplay.textContent = "Please enter a valid bill amount!";
                tipDisplay.textContent = "Tip: $0.00";
                totalDisplay.textContent = "Total Bill: $0.00";
                return;
            }

            const tip = bill * 0.15;
            const total = bill + tip;

            // Display results
            tipDisplay.textContent = "Tip: $" + tip.toFixed(2);
            totalDisplay.textContent = "Total Bill: $" + total.toFixed(2);

            // Hide error message
            errorDisplay.textContent = "";

        });