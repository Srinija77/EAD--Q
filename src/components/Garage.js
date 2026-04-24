import React, { useState } from "react";


// Car component (receives props)
function Car(props) {
  return <h3>I am a {props.brand} car</h3>;
}


// Garage component (uses state + passes props)
function Garage() {
  const [carName, setCarName] = useState("Toyota");


  return (
    <div>
      <h2>My Garage</h2>


      {/* Passing state as props */}
      <Car brand={carName} />


      {/* Change state */}
      <button onClick={() => setCarName("BMW")}>Change Car</button>
    </div>
  );
}


export default Garage;
