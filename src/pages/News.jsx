// news page with 5 articles
import { useNavigate } from "react-router";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PATHS from "../routes/routes";

const articles = [
  {
    postDate: "2020-01-01",
    postTitle: "Koreaga o'qishga topshirish yanada osonlashdi",
    postContent: "Bluh blah blah",
  },
  {
    postDate: "2021-03-03",
    postTitle: "Germaniya o'qishga topshirish yanada osonlashdi",
    postContent: "Bluh blah blah",
  },
  {
    postDate: "2022-05-05",
    postTitle: "Yaponiya o'qishga topshirish yanada osonlashdi",
    postContent: "Bluh blah blah",
  },
  {
    postDate: "2023-07-07",
    postTitle: "Kanada o'qishga topshirish yanada osonlashdi",
    postContent: "Bluh blah blah",
  },
  {
    postDate: "2024-09-09",
    postTitle: "AQSH o'qishga topshirish yanada osonlashdi",
    postContent: "Bluh blah blah",
  },
];

function News() {
  const navigate = useNavigate();
  const handleViewDeatails = (title, date) => {
    navigate(
      `${PATHS.NEWS_DETAIL.replace(":id", date).replace(":title", title)}`
    );
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
        {articles.map((article, index) => (
          <li key={index}>
            <h2>{article.postTitle.slice(0, 5)}</h2>
            <p>{article.postDate}</p>
            <button
              onClick={() =>
                handleViewDeatails(article.postTitle, article.postDate)
              }
            >
              Read More
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default News;
