import { useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import { Modal } from "../../components/Modal";
import {
  Container,
  Content,
  ActivationSection,
  ActivateButton,
} from "./styles";
import { Step1BankAccount } from "../../components/Steps/Step1BankAccount/Step1BankAccount";

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setCurrentStep(1);
  };

  return (
    <Container>
      <Sidebar />
      <Content>
        <ActivationSection>
          <img src="../../../public/imagens/robot-icon.png" alt="Robot Icon" />
          <p>
            Clique no botão para começar a usar os benefícios financeiros do
            PsicoManager
          </p>
          <ActivateButton onClick={() => setIsModalOpen(true)}>
            Ativar o PsicoBank
          </ActivateButton>
        </ActivationSection>
      </Content>

      <Modal
        isOpen={isModalOpen}
        onClose={handleClose}
        currentStep={currentStep}
        onNext={handleNext}
        onBack={handleBack}
        isLastStep={currentStep === 3}
      >
        {currentStep === 1 && <Step1BankAccount />}
        {/* Outros steps serão adicionados aqui */}
      </Modal>
    </Container>
  );
}
