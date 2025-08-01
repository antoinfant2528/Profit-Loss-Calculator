
    function Calculate() {
      const cpInput = document.getElementById('CP');
      const spInput = document.getElementById('SP');
      const resultDiv = document.getElementById('result');
     
      const cp = parseFloat(cpInput.value);
      const sp = parseFloat(spInput.value);
     
      // Clear previous styling
      resultDiv.className = 'result';
     
      // Input validation
      if (isNaN(cp) || isNaN(sp) || cp < 0 || sp < 0) {
        resultDiv.innerHTML = "⚠️ Please enter valid positive numbers for both prices";
        resultDiv.classList.add('error');
        resultDiv.style.display = 'flex';
        return;
      }
     
      if (cp === 0) {
        resultDiv.innerHTML = "⚠️ Cost Price cannot be zero";
        resultDiv.classList.add('error');
        resultDiv.style.display = 'flex';
        return;
      }
     
      // Calculate and display results
      if (sp === cp) {
        resultDiv.innerHTML = "⚖️ NO PROFIT NO LOSS<br>Break-even point reached";
        resultDiv.classList.add('neutral');
      } else if (sp > cp) {
        const profit = sp - cp;
        const percentage = ((profit / cp) * 100).toFixed(2);
        resultDiv.innerHTML = `📈 PROFIT: ₹${profit.toFixed(2)}<br>Profit Percentage: ${percentage}%`;
        resultDiv.classList.add('profit');
      } else {
        const loss = cp - sp;
        const percentage = ((loss / cp) * 100).toFixed(2);
        resultDiv.innerHTML = `📉 LOSS: ₹${loss.toFixed(2)}<br>Loss Percentage: ${percentage}%`;
        resultDiv.classList.add('loss');
      }
     
      resultDiv.style.display = 'flex';
    }
   
    // Allow Enter key to trigger calculation
    document.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        Calculate();
      }
    });
 