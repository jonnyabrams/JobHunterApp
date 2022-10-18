import NavBar from "./components/NavBar";
import { BrowserRouter as Router }  from "react-router-dom";
import Home from "./pages/Home";


const App = () => {
  return (
   <Router>
      <NavBar/>
      <Home/>
   </Router>
  );
}

export default App;
