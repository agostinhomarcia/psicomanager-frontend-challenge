import { Home } from "../src/pages/Home";
import { GlobalStyle } from "../src/global";
import { Header } from "./components/Header";
import { PsicoBankProvider } from "./contexts/PsicoBankContext";

function App() {
  return (
    <PsicoBankProvider>
      <GlobalStyle />
      <Header />
      <Home />
    </PsicoBankProvider>
  );
}

export default App;
