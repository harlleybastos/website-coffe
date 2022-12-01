import { About } from "./components/About";
import { Body } from "./components/Body";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
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
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
