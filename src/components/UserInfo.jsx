import Birthplace from "./Birthplace";

const UserInfo = ({ userName }) => {
  return (
    <div>
      <h1>hello, i am {userName}</h1>
      <Birthplace userName={userName} />
    </div>
  );
};

export default UserInfo;
