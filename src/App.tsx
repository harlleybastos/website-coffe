import { About } from "./components/About";
import { Body } from "./components/Body";
import { Contact } from "./components/Contact";
import { Menu } from "./components/Menu";
import { Reviews } from "./components/Reviews";

function App() {
  return (
    <div className="App">
      <Body />
      <About />
      <Menu />
      <Reviews />
      <Contact />
    </div>
  );
}

export default App;
