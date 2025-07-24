// make simple purchase page
import { useNavigate } from "react-router";
import PATHS from "../routes/routes";
import { useRef, useState } from "react";

function Purchase() {
  const [purchase, setPurchase] = useState(false);
  const topRef = useRef(null);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  console.log("top ref: ", topRef.current);

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

      <div>
        {/* Step 2: Mark the top of the page */}
        <div ref={topRef}>
          <h1>Welcome to the Top of the Page</h1>
        </div>

        {/* Long Content */}
        <div style={{ height: "1500px", padding: "20px" }}>
          <p>Scroll down to see the Back to Top button.</p>
          {[...Array(50)].map((_, i) => (
            <p key={i}>This is paragraph number {i + 1}</p>
          ))}
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: 5,
            cursor: "pointer",
          }}
        >
          Back to Top
        </button>
      </div>
    </div>
  );
}
export default Purchase;
