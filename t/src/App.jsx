import "./App.css";
import FooterApp from "./components/Footer";
import NavbarComponent from "./containers/Navcontainer/Navbar";
import SectionPrincipale from "./containers/sectionBody/sectionPrincipale";

function App() {
  return (
    <div className="font-Inter">
      <NavbarComponent />
      <SectionPrincipale />
      <div className="Footerkode">
        <FooterApp />
      </div>
    </div>
  );
}

export default App;
