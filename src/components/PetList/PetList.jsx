// import PetList.css from "./PetList.css"

export default function PetList(props) {
  // 8.
  const petLis = props.pets.map((pet) => {
    return <li key={pet._id}>{pet.name}</li>;
  });

  // always write out basic html
  // import it into the file to be rendered (app.jsx)
  // write out the component and pass in props
  // and confirm your props in the dev tools
  return (
    <main>
      <h1>Pet List</h1>
      {/* 8. render out pets 
      check to see if pets exist */}
      {petLis.length !== 0 ? <ul>{petLis}</ul> : <h2> No pets yet! </h2>}
    </main>
  );
}
