import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import Process from "./components/Process";
import Footer from "./components/Footer"; // Importe o Footer

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Process />
      <Footer /> {/* Adicione o Footer aqui */}
    </>
  );
}

export default App;
