import "./PetList.css";

export default function PetList(props) {
  // 8.
  const petLis = props.pets.map((pet) => {
    return (
      <li key={pet._id} onClick={() => props.setSelectedPet(pet)}>
        {pet.name}
      </li>
    );
  });

  // always write out basic html
  // import it into the file to be rendered (app.jsx)
  // write out the component and pass in props
  // and confirm your props in the dev tools
  return (
    <main className="pet-list">
      <h1>Pet List</h1>
      {/* 12. */}
      <button onClick={props.handleFormOpen}>{props.buttonTextForForm}</button>
      {/* 8. render out pets 
      check to see if pets exist */}
      {petLis.length !== 0 ? <ul>{petLis}</ul> : <h2> No pets yet! </h2>}
    </main>
  );
}
