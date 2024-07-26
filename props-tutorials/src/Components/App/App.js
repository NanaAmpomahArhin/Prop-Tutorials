import "./App.css";
import Data from "./Data";
import AnimalCard from "../AnimalCard/AnimalCard.js";

function showAdditional(additional) {
  const alertInformation = Object.entries(additional)
    .map((information) => `${information[0]}: ${information[1]}`)
    .join("\n");
  alert(alertInformation);
}
function App() {
  return (
    <div className="wrapper">
      <h1>Animals</h1>
      {Data.map((animal) => (
        <AnimalCard
          additional={animal.additional}
          diet={animal.diet}
          key={animal.name}
          name={animal.name}
          scientificName={animal.scientificName}
          showAdditional={showAdditional}
          size={animal.size}
        />
      ))}
    </div>
  );
}

export default App;
