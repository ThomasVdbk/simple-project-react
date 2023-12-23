import { useState } from "react";
import Fruit from "./components/Fruit";
import FruitForm from "./components/FruitForm";

function App() {
  // ************state (état, données)************
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" }
  ]);

  // ************comportements************
  const handleDelete = (id) => {
    //1. copie du state
    const fruitsCopy = [...fruits];

    //2. manipuler mon state
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);

    //3. modifier mon state avec le setter
    setFruits(fruitsCopyUpdated);
  };

  const handleAdd = (fruitAAjouter) => {
    //1. copie du state
    const fruitsCopy = [...fruits];

    //2. manipulation sur la copie du state
    fruitsCopy.push(fruitAAjouter);

    //3. modifier le state avec le setter
    setFruits(fruitsCopy);
  };

  const afficherFruitPrefere = (fruitNom) => {
    alert(`J'aime trop ce fruit: ${fruitNom}`);
  };

  // ************affichage (render)************
  // Exemple de réusabilité du composant Fruit avec handleDelete et afficherFruitPrefere
  return (
    <div>
      <h1>Liste de fruits et bouton suppression</h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            fruitInfo={fruit}
            onClick={() => handleDelete(fruit.id)}
            key={fruit.id}
          />
        ))}
      </ul>
      <h1>Liste de fruits et bouton alert fruit préféré</h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            fruitInfo={fruit}
            onClick={() => afficherFruitPrefere(fruit.nom)}
            key={fruit.id}
          />
        ))}
      </ul>
      <FruitForm handleAdd={handleAdd} />
    </div>
  );
}

export default App;

// Gestion du formulaire
// 1. création du formulaire
// 2. soumission du formulaire (onSubmit / handleSubmit)
// 3. collecte des données du formulaire
// 3a. méthode 1: documentGetElementById "React" (useRef)
// 3b. méthode 2: sync descendante / ascendante (onChange / handleChange)
