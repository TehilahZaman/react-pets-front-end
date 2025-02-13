import { useState } from "react";
import "./PetForm.css";

const initialState = {
  name: "",
  age: 0,
  breed: "",
};

export default function PetForm(props) {
  const [formData, setFormData] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
    // call the function from app.js and pass in form data
    // lifting form data to app.jsx
    // so we can make our POSt fetch call to the express api
    console.log(formData);
    props.createPet(formData);
    setFormData(initialState);
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
