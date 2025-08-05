import { useContext } from "react";
import { UserContext } from "../utils/context";

const Footer = () => {
  const { userName, userAge } = useContext(UserContext);
  return (
    <div>
      <h1>copyright {userName}</h1>
      <h1> {userAge}</h1>
    </div>
  );
};

export default Footer;
