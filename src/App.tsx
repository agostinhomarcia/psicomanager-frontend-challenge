import { Home } from "../src/pages/Home";
import { GlobalStyle } from "../src/global";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
    </>
  );
}

export default App;
