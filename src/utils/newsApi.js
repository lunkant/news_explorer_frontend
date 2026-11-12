const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = import.meta.env.PROD
  ? "https://news-api-proxy.up.railway.app/news/v2/everything"
  : "https://newsapi.org/v2/everything";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

export function getNews(query) {
  const weeksAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const params = new URLSearchParams({
    q: query,
    from: weeksAgo.toISOString(),
    to: new Date().toISOString(),
    pageSize: 100,
    apiKey: API_KEY,
  });
  return fetch(`${BASE_URL}?${params}`)
    .then(checkResponse)
    .then((data) =>
      data.articles.map((article) => ({
        keyword: query,
        title: article.title,
        text: article.description,
        date: article.publishedAt,
        source: article.source.name,
        link: article.url,
        image: article.urlToImage || "https://placehold.co/400x272",
      })),
    );
}
