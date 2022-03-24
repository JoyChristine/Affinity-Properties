function calculatePayments(){
    let  amount = parseInt(document.getElementById('housePrice').value),
 
        months = parseInt(document.getElementById('period').value), 
 
        interest = parseFloat(document.getElementById('intRate').value),

        deposit = parseInt(document.getElementById('deposit').value),

        monInt = interest / 1200;
  
        if(!amount){
          alert('Please add a loan amount');
          return;
        }
  
        if(!months){
          months = 60;
          loanTerm = document.getElementById('period').value = '60';
        }
  
        if(!deposit){
          deposit = 0;
          deposit = document.getElementById('deposit').value = '0';
        }
  
        
        if(!interest){
            interest = 3.25;
          intRate = document.getElementById('intRate').value = '5';
        }
  
  
        var calc = ((monInt + (monInt / (Math.pow((1 + monInt), months) -1))) * (amount - (deposit || 0))).toFixed(2);
  
        var paymentResults = document.getElementById('paymentResults');
        paymentResults.style.display = 'block';
        // paymentResults.innerHTML = '';
        var results = document.createElement('div');
        results.innerHTML = '<h1 style="text-align:center">Estimated Monthly Payment is:<br/></h1>' + '<h3 style="text-align:center">$' + calc + '/Month</h3>';
  
        paymentResults.append(results);
  
  
  }