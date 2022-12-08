import React, {useState} from "react";
import { AppRoutes } from "./routes/routes";
import Navbar from "./components/Navbar";
import Login from './components/Login';

//run this command on a separate terminal to get json server running
//npx json-server --watch carpark.json --port 8000 -m ../node_modules/json-server-auth	

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div>
      <Navbar isLoggedIn={loggedIn}></Navbar>
      <AppRoutes loginHandler={setLoggedIn}></AppRoutes>
    </div>
  );
};

export default App;

