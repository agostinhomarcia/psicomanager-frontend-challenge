import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  StepsContainer,
  CloseButton,
  ModalContent,
  ModalFooter,
  ProgressBarContainer,
  ProgressStep,
  StepIcon,
  StepText,
} from "./styles";
import { usePsicoBank } from "../../contexts/PsicoBankContext";
import { Step1BankAccount } from "../Steps/Step1BankAccount/Step1BankAccount";
import { Step2MessageConfig } from "../Steps/Step2MessageConfig/index";
import { Step3PaymentConfig } from "../Steps/Step3PaymentConfig";

export function PsicoBank() {
  const { isModalOpen, currentStep, closeModal, previousStep } = usePsicoBank();

  if (!isModalOpen) return null;

  const isLastStep = currentStep === 3;

  const activeFormId = {
    1: "bankForm",
    2: "messageForm",
    3: "paymentForm",
  }[currentStep];

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <h2>Ativar o PsicoBank</h2>
          <CloseButton onClick={closeModal}>&times;</CloseButton>
        </ModalHeader>

        <StepsContainer>
          <ProgressBarContainer>
            <ProgressStep isActive={currentStep >= 1}>
              <StepIcon isActive={currentStep >= 1} isFirst={true}>
                <img
                  src="../../../public/imagens/progress1.png"
                  alt="Cadastrar conta"
                />
              </StepIcon>
              <StepText isActive={currentStep >= 1}>
                Cadastrar uma conta
              </StepText>
            </ProgressStep>

            <ProgressStep isActive={currentStep >= 2}>
              <StepIcon isActive={currentStep >= 2} isFirst={false}>
                <img
                  src="../../../public/imagens/progress2.png"
                  alt="Canais de envio"
                />
              </StepIcon>
              <StepText isActive={currentStep >= 2}>
                Canais de envio e Mensagem de cobrança
              </StepText>
            </ProgressStep>

            <ProgressStep isActive={currentStep === 3}>
              <StepIcon isActive={currentStep === 3} isFirst={false}>
                <img
                  src="../../../public/imagens/progress2.png"
                  alt="Forma de pagamento"
                />
              </StepIcon>
              <StepText isActive={currentStep === 3}>
                Forma de pagamento da cobrança
              </StepText>
            </ProgressStep>
          </ProgressBarContainer>
        </StepsContainer>

        <ModalContent>
          {currentStep === 1 && <Step1BankAccount />}
          {currentStep === 2 && <Step2MessageConfig />}
          {currentStep === 3 && <Step3PaymentConfig />}
        </ModalContent>

        <ModalFooter>
          <button type="button" className="cancel" onClick={closeModal}>
            Cancelar
          </button>
          {currentStep > 1 && (
            <button type="button" className="back" onClick={previousStep}>
              Voltar
            </button>
          )}
          <button type="submit" form={activeFormId} className="next">
            {isLastStep ? "Concluir" : "Próximo"}
          </button>
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
}
