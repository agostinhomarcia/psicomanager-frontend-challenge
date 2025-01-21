import { ReactNode } from "react";
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

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentStep: number;
  children: ReactNode;
  onNext?: () => void;
  onBack?: () => void;
  isLastStep?: boolean;
}

const steps = [
  "Cadastrar uma conta",
  "Canais de envio e Mensagem de cobrança",
  "Forma de pagamento da cobrança",
];

export function Modal({
  isOpen,
  onClose,
  currentStep,
  children,
  onNext,
  onBack,
  isLastStep = false,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <h2>Ativar o PsicoBank</h2>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>

        <StepsContainer>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepIndicator isActive={currentStep >= index + 1}>
                {currentStep > index + 1 ? "✓" : index + 1}
              </StepIndicator>
              <StepLabel isActive={currentStep >= index + 1}>{label}</StepLabel>
              {index < steps.length - 1 && (
                <StepConnector isActive={currentStep > index + 1} />
              )}
            </Step>
          ))}
        </StepsContainer>

        <ModalContent>{children}</ModalContent>

        <ModalFooter>
          <button className="cancel" onClick={onClose}>
            Cancelar
          </button>
          {currentStep > 1 && (
            <button className="back" onClick={onBack}>
              Voltar
            </button>
          )}
          <button className="next" onClick={onNext}>
            {isLastStep ? "Concluir" : "Próximo"}
          </button>
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
}
