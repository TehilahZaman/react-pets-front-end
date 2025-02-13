// I'M IN THE MAIN BRANCH
// look no other comments her

import { useState, useEffect } from "react";
import "./App.css";

import * as petService from "./services/petService.js"; // 3c.
// everything exported here is under perService

import PetList from "./components/PetList/PetList.jsx";
import PetForm from "./components/PetForm/PetForm.jsx";
import PetDetails from "./components/PetDetails/PetDetails.jsx";

function App() {
  //6.
  const [pets, setPets] = useState([]);
  //12
  const [isFormOpen, setIsFormOpen] = useState(false);
  //14
  const [selectedPet, setSelectedPet] = useState(null);

  //4.
  useEffect(() => {
    // define and then call the function to fetch data
    async function fetchPets() {
      const data = await petService.index();

      // check you work before you do anything else
      console.log(data, "<--data ");

      // 6. store the data into the state
      // everytime you update state, go check your dev tools and look at state
      setPets(data);
    }

    // call the functi0on
    fetchPets();
  }, []);
  // empy arrays says run use effect when the component onto the dom

  //11.
  async function createPet(dataFromTheForm) {
    // lift the dataFromTheForm
    // pass this function to the form component
    // and call it when the user submits the form

    try {
      // here we are calling the http request create and passing it the form data
      const newPet = await petService.create(dataFromTheForm);
      console.log(newPet, "<-- new pet");
      setPets([...pets, newPet]);
    } catch (err) {
      console.log(err);
    }
  }

  //15
  async function deletePet(petIdFromPetDetails) {
    try {
      const response = await petService.deletePet(petIdFromPetDetails);

      // if server is not working and we DON"T get a response, catch(Err) will work
      // but if server is on and we DO get a response, EVEN if the response is an error, catch(Err) waon't catch that error
      // so we have to dqay, if there is a error from the server, if response.error exists, don't reun the rest or the code and send that response.err to catch(err)
      // this is one way to handle an error from the response
      if (response.err) {
        // this forces the err to go to the catch block, the arugment to new Error
        // will be the value of err in the catch block
        throw new Error(response.err);
      }

      // update state and filter creates new array
      const filteredPetsArray = pets.filter((pet) => {
        return pet._id !== petIdFromPetDetails;
      });
      // uodate state with filtered array
      setPets(filteredPetsArray);
      // update selected pet so that the pet details GOES AWAY - ui needs to update by updating state
      setSelectedPet(null);
    } catch (err) {
      console.log(err);
    }
  }

  //12
  function handleFormOpen() {
    setIsFormOpen(!isFormOpen);
  }

  const buttonTextForForm = isFormOpen ? "Close Form" : "New Pet";

  return (
    <div className="App">
      <PetList
        pets={pets}
        handleFormOpen={handleFormOpen}
        buttonTextForForm={buttonTextForForm}
        setSelectedPet={setSelectedPet}
      />
      {selectedPet ? (
        <PetDetails
          selectedPet={selectedPet}
          setSelectedPet={setSelectedPet}
          deletePet={deletePet}
        />
      ) : null}

      {isFormOpen ? <PetForm createPet={createPet} /> : null}
    </div>
  );
}
export default App;

/*
1. set up index.css
2. add the backend server in the .env 
  this tells our front end where the backend is running 

3. US: as a user i want to see all the pets 
3. make an api call to the back end to get all the pets 
  GET request to localhost:3000/pets
  services is where all fetch calls are made 
3a. define the base_url 
3b. define the function to call the api 
3c. export import it 

4. US: all pets should render on page when it loads 
-  useEffect 

5. in BACKEND express file, install cors 
npm i cors
  const cors = require('cors')
  app.use(cors({origin: 'http://localhost:5173'}))
  put the url the FRONTEND is running on 

  for securtity: react blocks all requests from servers it's not running on 
  so we need to install cors 
  and put in the url react is running on ... 
  to allow cross interaction ... 
ASK FOR review of cors again 

6. create a state to store data called from api 
7. create component to hold all the pets, 
  create the structure, import in app.jsx, pass in props, confirm props in dev tools

8. render out pets in petlist

9. create the pet form 

10. make create request in petService 
  define headers and body 
  parse, return data 

11. create add pet function 
  pass down to pet form 
  grab, pass in info 
  pass state to pet list 

  12. hide/show create form 
  establish isopen state
  create turnary 
  put button in list 
  function updates form to !
  pass down function to handle formOpen and onClick run it 
  to change to button text: 
    pass down isOpen and use turnary 
    or 
    create variable that is a turnary statement on is isOpen is true/false 
    and pass that down to List 

    13. US: as a user i want to clikc on a button to view the details of a single pet 
    create onClick for every pet 
    check to see if it logs 
  14. create pet details component  
    render it before writing functioanlity 
    put header to check it working 
    lift and pawss down set state - selectedPet
    List: on click input pet 
    confirm selectedPet state is updated onCLick 
    pass selectedPet as  prop to pet details 
    in deve tools, you can see the detail props and see them change and you click on the pets 
    need an if statement in detial so that if no pet is selected it says so 

    open close details:
    add a button to details 
    pass set seletect pet as props to details 
    crete turnary to check is selected pet exists
    in button: onclick pass null to set selectedpet 


    15. US: when viewing details i want to be abel to deletethe pet 
    method: delete
  endpoint: localhost:3000/pets/:petId
  bc backend is running on 3000

  service: 
  we don't need to pass any info to the server 
  we call delete in app when the user clicks delete 

  create delete pet function 
  call delete pet function from service
  filter and set state 
  pass punction to details, call it on lcik 
  set pets and set selected pet
*/

/*
review: 

where does the http request go? 
where the state is 
when is it called? 
when the user submits information 
*/
