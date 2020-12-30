import { useState } from "react";
import React from "react";

const Home = () => {
  const [name, setName] = useState("Lucas");
  const [age, setAge] = useState(32);

  const handleClick = () => {
    setName("Clara");
    setAge(28);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is ${age} years old.
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
