import { useState, useEffect } from "react";
import "./App.css";

import * as petService from "./services/petService.js"; // 3c.
// everything exported here is under perService

import PetList from "./components/PetList/PetList.jsx";
import PetForm from "./components/PetForm/PetForm.jsx";

function App() {
  //6.
  const [pets, setPets] = useState([]);

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

    // call teh functi0on
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

  return (
    <div className="App">
      <PetList pets={pets} />
      <PetForm createPet={createPet} />
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

10. make create request is petService 
  define headers and body 
  parse, return data 

. create pet function 
  pass down to pet form 
  grab, pass in info 
  pass state to pet list 

*/
