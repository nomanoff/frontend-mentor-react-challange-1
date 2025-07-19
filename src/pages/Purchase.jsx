// make simple purchase page
import { useNavigate } from "react-router";
import PATHS from "../routes/routes";

function Purchase() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
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
      <h1>Purchase Page</h1>
      <p>This is the purchase page of our application.</p>
      <button onClick={handleBack}>Go Back</button>
    </div>
  );
}
export default Purchase;
