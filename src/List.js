import React from "react";

const List = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        const { id, name, age, image, description } = person;
        return (
          <div key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age}</p> 
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default List;
