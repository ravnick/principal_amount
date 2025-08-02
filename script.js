function calculate() {
    const principal = parseFloat(document.getElementById("principal").value);
    const monthlyRate = parseFloat(document.getElementById("monthlyRate").value);
    const start = new Date(document.getElementById("startDate").value);
    const end = new Date(document.getElementById("endDate").value);

    if (!principal || !monthlyRate || !start || !end) {
        alert("कृपया सभी इनपुट भरें");
        return;
    }

    // Step 1: Difference in days
    const oneDay = 24 * 60 * 60 * 1000;
    const days = Math.round((end - start) / oneDay);

    if (days < 0) {
        alert("End Date को सही से चुनो (Start के बाद हो)");
        return;
    }

    // Step 2: Per day interest rate
    const dailyRate = (monthlyRate / 30); // e.g. 3% per 30 days => 0.1% per day
    const dailyInterest = (principal * dailyRate) / 100;

    // Step 3: Total Interest
    const totalInterest = dailyInterest * days;
    const totalAmount = principal + totalInterest;

    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = `
        🔢 कुल दिन: <strong>${days} दिन</strong><br/>
        💰 रोज का ब्याज: ₹<strong>${dailyInterest.toFixed(2)}</strong><br/>
        🧮 कुल ब्याज: ₹<strong>${totalInterest.toFixed(2)}</strong><br/>
        📦 कुल रकम: ₹<strong>${totalAmount.toFixed(2)}</strong>
      `;
}