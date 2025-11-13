import Navbar from "./pages/home/Navbar";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { Route, Router } from "wouter";

function App() {
  return (
    <>
      {/* agregado */}
      <Navbar />
      <div className="mt-16 p-6">
        <Login />
        {/* agregado */}
        <Route path="/" component={Home} />
      </div>
      {/* <Router>
          <Route path="/" component={FormSpecialtyDoctor} />
        </Router> */}
    </>
  );
}

export default App;
