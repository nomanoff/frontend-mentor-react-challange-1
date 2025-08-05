import CityName from "./CityName";

const Birthplace = ({ userName }) => {
  return (
    <div>
      <h1>I am from Uzbekistan</h1>

      <CityName userName={userName} />
    </div>
  );
};

export default Birthplace;
