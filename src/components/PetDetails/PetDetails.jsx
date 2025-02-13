export default function PetDetails(props) {
  // null is the original value
  if (props.selectedPet === null) {
    <section>
      <h2>No Pet Selected</h2>
    </section>;
  }

  return (
    <section>
      <h2>{props.selectedPet.name} Details</h2>
      <dt>Breed: {props.selectedPet.breed}</dt>
      <dd></dd>
      <dt>Age: {props.selectedPet.age}</dt>
      <dd></dd>
      <button onClick={()=> props.deletePet(props.selectedPet._id)}>Delete</button>
      <button onClick={() => props.setSelectedPet(null)}>Close Details </button>
    </section>
  );
}
