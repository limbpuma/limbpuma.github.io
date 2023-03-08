import React, { useState } from "react";
import Languages from "./Languages.json";

function LanguageSelector() {
  const [language, setLanguage] = useState("en");

  function handleLanguageChange(newLanguage) {
    setLanguage(newLanguage);
  }

  function getText(key) {
    return Languages[language][key];
  }

  return (
    <div>
      <button onClick={() => handleLanguageChange("en")}>
        <img src="/path/to/english-flag.png" alt="English" />
      </button>
      <button onClick={() => handleLanguageChange("de")}>
        <img src="/path/to/german-flag.png" alt="Deutsch" />
      </button>
      <button onClick={() => handleLanguageChange("es")}>
        <img src="/path/to/spanish-flag.png" alt="Español" />
      </button>
      
      <h1>{getText("home")}</h1>
      <p>{getText("subtitle")}</p>
      {/* Renderizar otros elementos de la página */}
    </div>
  );
}

export default LanguageSelector;
