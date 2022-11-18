import { About } from "./components/About";
import { Body } from "./components/Body";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Reviews } from "./components/Reviews";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <About />
      <Menu />
      <Reviews />
    </div>
  );
}

export default App;
