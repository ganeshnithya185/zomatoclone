import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

const ApiExample = () => {
  const [value, setValue] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setValue(data))
      .catch((err) => console.log(err));
    console.log("fetchdata", value);
  };
  return (
    <div>
      {value.map((post) => (
        <Card key={post.id} style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ApiExample;
