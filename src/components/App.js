import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Headers from "./Header";
import Filter from "./Filter";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // function onDarkModeClick() {
  //   setIsDarkMode((isDarkMode) => !isDarkMode);
  // }
  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Headers isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} onDarkModeClick={onDarkModeClick} />
       {/* <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header> */}
      <ShoppingList items={itemData} />
      
    </div>
  );
}

export default App;
