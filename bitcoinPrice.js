const apiURLBitcoin = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';
const apiURLConversion = 'https://api.exchangerate-api.com/v4/latest/USD';

fetch(apiURLBitcoin)
  .then(response => response.json())
  .then(data => {
    const precioBitcoinUSD = data.bitcoin.usd;
    
    fetch(apiURLConversion)
      .then(response => response.json())
      .then(data => {
        const tipoCambioUSD_MXN = data.rates.MXN;
        const precioBitcoinMXN = precioBitcoinUSD * tipoCambioUSD_MXN;
        
        document.getElementById('precio-bitcoin').innerHTML = `1 Bitcoin = ${precioBitcoinMXN.toFixed(2)} MXN`;
      })
      .catch(error => console.error(error));
  })
  .catch(error => console.error(error));