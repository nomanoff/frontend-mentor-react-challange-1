import { useNavigate } from "react-router";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PATHS from "../routes/routes";

function Home() {
  let navigate = useNavigate();
  return (
    <div>
      <div
        onClick={() => {
          navigate(PATHS.HOME);
        }}
      >
        home
      </div>
      <h1>Home Page</h1>
      <p>This is the about page of our application.</p>

      <button onClick={() => navigate(PATHS.ABOUT)}>about</button>
      <br />
      <button onClick={() => navigate(PATHS.NEWS)}>news</button>
      <br />
      <button onClick={() => navigate(PATHS.PURCHASE)}>purchase</button>
      <br />
      <button onClick={() => navigate(PATHS.CHAT_APP)}>Chat App</button>
      <br />

      <button onClick={() => navigate("/hooks")}>Hooks</button>
    </div>
  );
}

export default Home;
