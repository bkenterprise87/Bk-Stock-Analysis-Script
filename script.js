document.addEventListener("DOMContentLoaded", function() {
    const stockTicker = "TCS.NS"; // Example stock (TCS)

    // Example Stock Data
    const stockData = {
        ticker: stockTicker,
        peRatio: 34.5,
        roe: 15.2,
        marketCap: "12 Trillion INR",
        sma50: 3500,
        sma200: 3300,
        rsi: 70
    };

    // Inject stock data into HTML
    document.getElementById("stock-ticker").textContent = stockData.ticker;
    document.getElementById("pe-ratio").textContent = stockData.peRatio;
    document.getElementById("roe").textContent = stockData.roe;
    document.getElementById("market-cap").textContent = stockData.marketCap;
    document.getElementById("sma50").textContent = stockData.sma50;
    document.getElementById("sma200").textContent = stockData.sma200;
    document.getElementById("rsi").textContent = stockData.rsi;

    // Simulate fetching the latest stock news (replace with real API later)
    const newsList = [
        { title: "TCS announces Q4 results", link: "https://moneycontrol.com" },
        { title: "TCS signs a new contract with the US government", link: "https://businessstandard.com" }
    ];

    const newsContainer = document.getElementById("news-list");
    newsList.forEach(news => {
        const newsItem = document.createElement("li");
        newsItem.innerHTML = `<a href="${news.link}" target="_blank">${news.title}</a>`;
        newsContainer.appendChild(newsItem);
    });
});
