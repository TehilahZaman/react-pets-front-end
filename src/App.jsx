import { useState, useEffect } from "react";

import * as petService from "./services/petService.js"; // 3c.

import PetList from "./components/PetList/PetList.jsx";

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

  return (
    <>
      <PetList pets={pets} />
    </>
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

*/
