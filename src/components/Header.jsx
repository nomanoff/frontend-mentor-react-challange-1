import { useContext } from "react";
import UserInfo from "./UserInfo";
import { UserContext } from "../utils/context";

const Header = () => {
  const { userName } = useContext(UserContext);

  return (
    <div>
      <h1>{userName}</h1>
      <UserInfo userName={userName} />
    </div>
  );
};

export default Header;
