// Function to fetch stock data and display it
function fetchStockData() {
  const stockSymbol = document.getElementById('stock-symbol').value.toUpperCase();
  if (!stockSymbol) {
    alert("Please enter a stock symbol!");
    return;
  }
  
  // Basic stock data simulation (since we are not using APIs here)
  let stockData = {
    "RELIANCE": {
      price: "₹2,300",
      peRatio: "35.67",
      recommendation: "Buy"
    },
    "TCS": {
      price: "₹3,500",
      peRatio: "28.45",
      recommendation: "Hold"
    },
    "INFY": {
      price: "₹1,400",
      peRatio: "27.21",
      recommendation: "Buy"
    }
  };

  // Fetch stock data from predefined stock data
  let data = stockData[stockSymbol];

  if (data) {
    displayStockInfo(data);
  } else {
    alert("Stock data not found!");
  }
}

// Function to display stock information
function displayStockInfo(data) {
  const stockInfoDiv = document.getElementById('stock-info');
  stockInfoDiv.innerHTML = `
    <h2>Stock Information</h2>
    <p><strong>Price:</strong> ${data.price}</p>
    <p><strong>P/E Ratio:</strong> ${data.peRatio}</p>
    <p><strong>Recommendation:</strong> ${data.recommendation}</p>
  `;
}
