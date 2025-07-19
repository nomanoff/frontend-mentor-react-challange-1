import { Routes, Route } from "react-router";

import PATHS from "./routes/routes.js";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Purchase from "./pages/Purchase.jsx";
import News from "./pages/News.jsx";
import NewsDetail from "./pages/NewsDetail.jsx";

function App() {
  return (
    <Routes>
      <Route path={PATHS.HOME} element={<Home />} />
      <Route path={PATHS.ABOUT} element={<About />} />
      <Route path={PATHS.PURCHASE} element={<Purchase />} />
      <Route path={PATHS.NEWS} element={<News />} />
      <Route path={PATHS.NEWS_DETAIL} element={<NewsDetail />} />
    </Routes>
  );
}

export default App;
