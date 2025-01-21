import { Container, Logo, SearchBar, Actions } from "./styles";
import logoImg from "../../../public/imagens/logo.png";
import videoIcon from "../../../public/imagens/camera.png";
import notificationIcon from "../../../public/imagens/notification.png";
import profileIcon from "../../../public/imagens/avatar.png";
import downIcon from "../../../public/imagens/down.png";

export function Header() {
  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="PsicoManager" />
      </Logo>

      <SearchBar>
        <input type="text" placeholder="Buscar cliente" />
        <button>
          <img src={downIcon} alt="Buscar" />
        </button>
      </SearchBar>

      <Actions>
        <button className="icon-button">
          <img src={videoIcon} alt="Video" />
        </button>
        <button className="icon-button">
          <img src={notificationIcon} alt="Notificação" />
        </button>
        <button className="profile-button">
          <img src={profileIcon} alt="Perfil" />
        </button>
      </Actions>
    </Container>
  );
}
