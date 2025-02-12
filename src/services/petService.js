// 3. This is where all fetch calls are made for pets

//3a. base url is what every api call starts with
// we know it's pets because of this line in the server.js backend:
// app.use('/pets', petRouter)
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;

//3b. US:  as a user i want to view all the pets
// call it index because we are using the index http request/that's what we called it in post man
async function index() {
  try {
    const response = await fetch(BASE_URL);
    // parse the json - open the json box to get teh array of objects
    // changing data type: making the json string into an array of objects
    const data = await response.json();
    // return the data!!
    return data;
  } catch (err) {
    console.log(err);
  }
}

//3c export
export { index };
