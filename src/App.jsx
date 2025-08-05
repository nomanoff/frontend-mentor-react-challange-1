import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import { ThemeContext, UserContext } from "./utils/context";

function App() {
  const [userName, setUserName] = useState("Adam");
  const [userAge, setUserAge] = useState(26);

  return (
    <div>
      <ThemeContext.Provider value={{ theme: "dark" }}>
        <UserContext.Provider value={{ userName, userAge }}>
          <Header />
          <Footer />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
