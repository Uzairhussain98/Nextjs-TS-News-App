import fetchNews from "../lib/fetchNews";
import { categories } from "./constants";
async function Homepage() {
  const all = categories.join(",");
  // const news: NewsResponse = await fetchNews(all);

  return <div>{/* NewsList News */}</div>;
}

export default Homepage;
