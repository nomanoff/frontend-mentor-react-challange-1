import { NavLink, Link } from "react-router";
import { useNavigate } from "react-router";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function Header() {
  return (
    <nav>
      <Link to="/home">Home</Link>
    </nav>
  );
}

function App() {
  let navigate = useNavigate();

  return (
    <>
      <Header />
      <h1>hello world</h1>

      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        go back
      </button>

      <div
        onClick={() => {
          navigate("/home");
        }}
      >
        <ArrowBackIosNewIcon />
      </div>
    </>
  );
}

export default App;
