import React from "react";

function TextControlsExample() {
  const persons = [
    {
      id: 1,
      name: "Alice",
      hobbies: ["Reading", "Painting"],
      address: {
        city: "New York",
        country: "USA",
      },
    },
    {
      id: 2,
      name: "Bob",
      hobbies: ["Gaming", "Cooking"],
      address: {
        city: "Los Angeles",
        country: "USA",
      },
    },
    {
      id: 3,
      name: "Charlie",
      hobbies: ["Hiking", "Photography"],
      address: {
        city: "London",
        country: "UK",
      },
    },
  ];
  return (
    <>
      <div>
        <h1>Persons and their hobbies</h1>
        {persons.map((person) => (
          <div key={person.id}>
            <h1>{person.id}</h1>
            <h2>{person.name}</h2>
            <h3>{person.hobbies[0]}</h3>
            <h4>{person.address.city}</h4>
            <h5>{person.address.country}</h5>
          </div>
        ))}
      </div>
    </>
  );
}

export default TextControlsExample;
