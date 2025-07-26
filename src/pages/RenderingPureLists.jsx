const people = [
  {
    id: 1,
    name: "Ada Lovelace",
    profession: "mathematician",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    profession: "mathematician",
  },
];

const RenderingLists = () => {
  return (
    <div>
      <ul>
        {people.map((person, index) => {
          return (
            <li key={index}>
              <div>
                <strong>{person.profession}</strong>:{person.name}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RenderingLists;
