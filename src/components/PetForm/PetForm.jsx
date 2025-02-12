import { useState } from "react";
import "./PetForm.css";

export default function PetForm(props) {
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    breed: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    // call the function from app.js and pass in form data
    // lifting form data to app.jsx
    // so we can make our POSt fetch call to the express api
    props.createPet(formData);
    //   setFormData()
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <form className="pet-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        name="age"
        value={formData.age}
        onChange={handleChange}
      />

      <label htmlFor="breed">Breed:</label>
      <input
        type="text"
        id="breed"
        name="breed"
        value={formData.breed}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
