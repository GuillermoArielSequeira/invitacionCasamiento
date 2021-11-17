import Carousel from "./components/Carousel";
import InfoWedding from "./components/Infowedding";
import "lazysizes";
// import a plugin
import "lazysizes/plugins/attrchange/ls.attrchange";

function App() {
  return (
    <div className="App">
      <Carousel />
      <InfoWedding />
    </div>
  );
}

export default App;
