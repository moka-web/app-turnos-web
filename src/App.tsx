import { Outlet } from "react-router";
import { Nav } from "./components/Nav";
import  { Home } from "./pages/Home";


function App() {
  return (
    <div>
      <Nav />
      <Home />
      <Outlet />
    </div>
  );
}

export default App;
