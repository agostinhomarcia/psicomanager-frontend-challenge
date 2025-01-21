import { Sidebar } from "../../components/Sidebar";
import { PsicoBank } from "../../components/Modal";
import { usePsicoBank } from "../../contexts/PsicoBankContext";
import {
  Container,
  Content,
  ActivationSection,
  ActivateButton,
} from "./styles";

export function Home() {
  const { openModal } = usePsicoBank();

  return (
    <Container>
      <Sidebar />
      <Content>
        <ActivationSection>
          <img
            src="/imagens/robot-icon.png"
            alt="Robot Icon"
            width={100}
            height={180}
          />
          <p>
            Clique no botão para começar a usar os benefícios financeiros do
            PsicoManager
          </p>
          <ActivateButton onClick={openModal}>
            Ativar o PsicoBank
          </ActivateButton>
        </ActivationSection>

        <PsicoBank />
      </Content>
    </Container>
  );
}
