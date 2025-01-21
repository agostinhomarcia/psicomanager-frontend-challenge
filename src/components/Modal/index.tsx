import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  StepsContainer,
  Step,
  StepIndicator,
  StepLabel,
  StepConnector,
  CloseButton,
  ModalContent,
  ModalFooter,
} from "./styles";
import { usePsicoBank } from "../../contexts/PsicoBankContext";
import { Step1BankAccount } from "../Steps/Step1BankAccount/Step1BankAccount";

const steps = [
  "Cadastrar uma conta",
  "Canais de envio e Mensagem de cobrança",
  "Forma de pagamento da cobrança",
];

export function PsicoBank() {
  const { isModalOpen, currentStep, closeModal, nextStep, previousStep } =
    usePsicoBank();

  const handleNextClick = () => {
    if (currentStep === 1) {
      // Aqui você pode adicionar a lógica de validação do formulário
      console.log("Form data:" /* form data here */);
    }
    nextStep();
  };

  if (!isModalOpen) return null;

  const isLastStep = currentStep === 3;

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <h2>Ativar o PsicoBank</h2>
          <CloseButton onClick={closeModal}>&times;</CloseButton>
        </ModalHeader>

        <StepsContainer>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepIndicator isActive={currentStep >= index + 1}>
                {index + 1}
              </StepIndicator>
              <StepLabel isActive={currentStep >= index + 1}>{label}</StepLabel>
              {index < steps.length - 1 && (
                <StepConnector isActive={currentStep > index + 1} />
              )}
            </Step>
          ))}
        </StepsContainer>

        <ModalContent>
          {currentStep === 1 && <Step1BankAccount />}
          {/* Add other steps here */}
        </ModalContent>

        <ModalFooter>
          <button className="cancel" onClick={closeModal}>
            Cancelar
          </button>
          {currentStep > 1 && (
            <button className="back" onClick={previousStep}>
              Voltar
            </button>
          )}
          <button className="next" onClick={handleNextClick}>
            {currentStep === 3 ? "Concluir" : "Próximo"}
          </button>
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
}
