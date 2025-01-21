import { Container, Logo, SearchBar, Actions } from "./styles";
import logoImg from "../../../public/imagens/logo.png";

export function Header() {
  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="PsicoManager" />
      </Logo>

      <SearchBar>
        <input type="text" placeholder="Buscar cliente" />
        <button>
          <span>▼</span>
        </button>
      </SearchBar>

      <Actions>
        <button className="icon-button">
          <span>📹</span>
        </button>
        <button className="icon-button">
          <span>🔔</span>
        </button>
        <button className="profile-button">
          <span>👤</span>
        </button>
      </Actions>
    </Container>
  );
}
