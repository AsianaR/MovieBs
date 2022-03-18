import React, { useState } from "react";
import AppHeader from "./appHeader/AppHeader";
import SearchAppBar from "./menu/TopMenu";
import Content from "./content/Content";

function App() {
  const [card, setCard] = useState([]);

  return (
    <div>
      <SearchAppBar />
      <AppHeader />
      <Content />
    </div>
  );
}

export default App;
