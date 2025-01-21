import { Home } from "../src/pages/Home";
import { GlobalStyle } from "../src/global";
import { Header } from "./components/Header";
import { PsicoBankProvider } from "./contexts/PsicoBankContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <PsicoBankProvider>
      <GlobalStyle />
      <Header />
      <Home />
      <ToastContainer />
    </PsicoBankProvider>
  );
}

export default App;
