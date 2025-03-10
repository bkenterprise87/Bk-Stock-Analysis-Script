document.getElementById('stock-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const stockSymbol = document.getElementById('stock-symbol').value;
    if (!stockSymbol) {
        alert('Please enter a stock symbol.');
        return;
    }

    // Call the stock analysis API (You need to have a backend that supports this)
    fetchStockAnalysis(stockSymbol);
});

function fetchStockAnalysis(stockSymbol) {
    // Fetch stock analysis data (this will be from a Python backend or API)
    fetch(`https://api.example.com/stock-analysis/${stockSymbol}`)
        .then(response => response.json())
        .then(data => {
            displayResults(data);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to fetch stock data. Please try again later.');
        });
}

function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h2>Analysis for ${data.symbol}</h2>
        <p><strong>Recommendation:</strong> ${data.recommendation}</p>
        <p><strong>P/E Ratio:</strong> ${data.pe_ratio}</p>
        <p><strong>P/B Ratio:</strong> ${data.pb_ratio}</p>
        <p><strong>ROE:</strong> ${data.roe}</p>
        <p><strong>Sentiment:</strong> ${data.sentiment}</p>
        <h3>Technical Analysis</h3>
        <p><strong>50-Day SMA:</strong> ${data.sma50}</p>
        <p><strong>200-Day SMA:</strong> ${data.sma200}</p>
        <img src="${data.chart_url}" alt="Stock Chart" />
    `;
}
