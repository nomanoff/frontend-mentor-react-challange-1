import { useContext } from "react";
import { UserContext } from "../utils/context";

const CityName = ({ userName }) => {
  const { userAge } = useContext(UserContext);
  return (
    <div>
      <h1>{userName} lives in Namangan</h1>
      <h1>I am {userAge} years old</h1>
    </div>
  );
};

export default CityName;
