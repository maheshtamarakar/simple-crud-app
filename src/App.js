import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { AddUsers } from "./Components/AddUsers";
import { AllUsers } from "./Components/AllUsers";
import { Codeforinterview } from "./Components/Codeforinterview";
import { Navbar } from "./Components/Navbar";
import { NotFound } from "./Components/NotFound";

function App() {
  return (
   <Router>
      <Navbar />
     <Switch>
       <Route exact path="/">
         <Codeforinterview />
       </Route>
       <Route exact path="/add">
         <AddUsers />
       </Route>
       <Route exact path="/all">
         <AllUsers />
       </Route>
       <Route>
         <NotFound/>
       </Route>
     </Switch>
 </Router>
  );
}

export default App;
