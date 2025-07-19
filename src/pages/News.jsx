// news page with 5 articles
import { useNavigate } from "react-router";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PATHS from "../routes/routes";
function News() {
  const navigate = useNavigate();

  const handleNavigateArticleOne = () => {
    const article1 = {
      postDate: "2020-01-01",
      postTitle: "Koreaga o'qishga topshirish yanada osonlashdi",
      postContent: "Bluh blah blah",
    };

    navigate(`/news/${article1.postDate}/${article1.postTitle}`);
  };

  const handleNavigateArticleTwo = () => {
    const article2 = {
      postDate: "2021-03-03",
      postTitle: "Germaniya o'qishga topshirish yanada osonlashdi",
      postContent: "Bluh blah blah",
    };

    navigate(`/news/${article2.postDate}/${article2.postTitle}`);
  };

  return (
    <div>
      <div
        onClick={() => {
          navigate(PATHS.HOME);
        }}
      >
        home
      </div>
      <h1>News Page</h1>
      <p>This is the news page of our application.</p>
      <ul>
        <li onClick={handleNavigateArticleOne}>Article 1</li>
        <li onClick={handleNavigateArticleTwo}>Article 2</li>
        <li>Article 3</li>
        <li>Article 4</li>
        <li>Article 5</li>
      </ul>
    </div>
  );
}
export default News;
