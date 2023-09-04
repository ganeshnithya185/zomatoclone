import Card from "react-bootstrap/Card";

function TextExample() {
  const persons = [
    {
      img: "https://img.freepik.com/free-photo/waistup-shot-asian-business-man-standing-moddle-office-holding-digital-tablet_1098-20813.jpg?w=1060&t=st=1693738101~exp=1693738701~hmac=cda8819114daa9321fdb9d5c15e2d75fbf8b09fa180e878ba7dd639deb727a8b",
      id: 1,
      name: "Alice",
      hobbies: ["Reading", "Painting"],
      address: {
        city: "New York",
        country: "USA",
      },
    },
    {
      img: "https://img.freepik.com/free-photo/business-woman-work_23-2148499453.jpg?size=626&ext=jpg",
      id: 2,
      name: "Bob",
      hobbies: ["Gaming", "Cooking"],
      address: {
        city: "Los Angeles",
        country: "USA",
      },
    },
    {
      img: "https://img.freepik.com/free-photo/man-working-night_1098-12798.jpg?size=626&ext=jpg",
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
    <div className="cards d-flex p-2 m-3">
      {persons.map((person) => (
        <Card key={person.id} style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Img variant="top" src={person.img} />
            <Card.Title>Person ID:{person.id}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Name:{person.name}
            </Card.Subtitle>
            <Card.Text>Hobbies:{person.hobbies.join(",")}</Card.Text>
            <Card.Text>City:{person.address.city}</Card.Text>
            <Card.Text>Country:{person.address.country}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default TextExample;
