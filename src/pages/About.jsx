import { useNavigate } from "react-router";
import PATHS from "../routes/routes";

function About() {
  const navigate = useNavigate();

  const navigatePurchase = () => {
    navigate(PATHS.PURCHASE);
  };

  return (
    <div>
      <button
        onClick={() => {
          navigate(PATHS.HOME);
        }}
      >
        home
      </button>

      <h1>About Page</h1>
      <p>This is the about page of our application.</p>
      <button onClick={navigatePurchase}>Go to Purchase</button>
    </div>
  );
}

export default About;
