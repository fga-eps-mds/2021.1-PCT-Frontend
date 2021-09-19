import React from "react";
import GlobalStyle from "./styles/global";

import HomeScreen from "./Pages/HomeScreen";

const App: React.FC = () => {
  return (
    <>
      <HomeScreen />
      <GlobalStyle />
    </>
  );
};

export default App;
