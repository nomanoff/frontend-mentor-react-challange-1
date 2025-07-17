import { useNavigate } from "react-router";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function Home() {
  let navigate = useNavigate();
  return (
    <div>
      <div
        onClick={() => {
          navigate(-1);
        }}
      >
        <ArrowBackIosNewIcon />
      </div>
      <h1>Home Page</h1>
      <p>This is the about page of our application.</p>
    </div>
  );
}

export default Home;
