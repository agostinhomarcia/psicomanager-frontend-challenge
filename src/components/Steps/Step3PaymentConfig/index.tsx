import { useForm, Controller } from "react-hook-form";
import { usePsicoBank } from "../../../contexts/PsicoBankContext";
import {
  FormContainer,
  FormGroup,
  InfoBox,
  CheckboxContainer,
  FineInput,
  ErrorMessage,
  SuccessMessage,
} from "./styles";
import downIcon from "../../../../public/imagens/down.png";
import { InputField } from "../../../components/InputField";
import { useState } from "react";
import { toast } from "react-toastify";
import { AlertTriangle, CheckCircle } from "lucide-react";

interface PaymentConfigFormData {
  professional: string;
  paymentMethods: {
    pix: boolean;
    creditCard: boolean;
    bankSlip: boolean;
  };
  fineConfig: {
    chargeFine: boolean;
    finePercentage: string;
    chargeInterest: boolean;
    interestValue: string;
  };
}

export function Step3PaymentConfig() {
  const { nextStep } = usePsicoBank();
  const { control, handleSubmit } = useForm<PaymentConfigFormData>({
    defaultValues: {
      professional: "João Silva",
      paymentMethods: {
        pix: true,
        creditCard: false,
        bankSlip: false,
      },
      fineConfig: {
        chargeFine: false,
        finePercentage: "",
        chargeInterest: false,
        interestValue: "",
      },
    },
  });

  const [showError] = useState(false);
  const [showSuccess] = useState(false);

  const onSubmit = (data: PaymentConfigFormData) => {
    const hasPaymentMethod = Object.values(data.paymentMethods).some(
      (value) => value
    );

    if (!hasPaymentMethod) {
      toast.error("Os campos obrigatórios não foram preenchidos", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      return;
    }

    toast.success("Configurações salvas com sucesso!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      onClose: () => nextStep(),
    });
  };

  return (
    <>
      <form id="paymentForm" onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <FormGroup>
            <label>Profissional *</label>
            <InputField value="João Silva" disabled readOnly />
            <img
              src={downIcon}
              alt="Ícone de seta para baixo"
              style={{ width: "12px", height: "12px" }}
            />
          </FormGroup>

          <FormGroup>
            <label>Forma de pagamento da cobrança</label>
            <InfoBox>
              Escolha quais as opções de pagamento que estarão disponíveis para
              o seu cliente no link das mensagens de cobrança.
            </InfoBox>
          </FormGroup>

          <FormGroup>
            <label>Disponibilizar meios de pagamento:*</label>
            <Controller
              name="paymentMethods.pix"
              control={control}
              render={({ field: { value, onChange } }) => (
                <CheckboxContainer>
                  <input type="checkbox" checked={value} onChange={onChange} />
                  <span>Pix</span>
                </CheckboxContainer>
              )}
            />
            <Controller
              name="paymentMethods.creditCard"
              control={control}
              render={({ field: { value, onChange } }) => (
                <CheckboxContainer>
                  <input type="checkbox" checked={value} onChange={onChange} />
                  <span>Cartão de crédito</span>
                </CheckboxContainer>
              )}
            />
            <Controller
              name="paymentMethods.bankSlip"
              control={control}
              render={({ field: { value, onChange } }) => (
                <CheckboxContainer>
                  <input type="checkbox" checked={value} onChange={onChange} />
                  <span>Boleto Bancário</span>
                </CheckboxContainer>
              )}
            />
          </FormGroup>

          <FormGroup>
            <label>
              Definir multas e juros para todos os boletos após o vencimento
            </label>
            <Controller
              name="fineConfig.chargeFine"
              control={control}
              render={({ field: { value, onChange } }) => (
                <CheckboxContainer>
                  <input type="checkbox" checked={value} onChange={onChange} />
                  <span>Cobrar multa</span>
                </CheckboxContainer>
              )}
            />

            <FineInput>
              <span>Valor da multa em %</span>
              <Controller
                name="fineConfig.finePercentage"
                control={control}
                render={({ field }) => (
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.01"
                    placeholder="0,0"
                    {...field}
                  />
                )}
              />
            </FineInput>

            <Controller
              name="fineConfig.chargeInterest"
              control={control}
              render={({ field: { value, onChange } }) => (
                <CheckboxContainer>
                  <input type="checkbox" checked={value} onChange={onChange} />
                  <span>Cobrar juros por dia de atraso (valor 1% ao mês)</span>
                </CheckboxContainer>
              )}
            />
          </FormGroup>
        </FormContainer>
      </form>

      {showError && (
        <ErrorMessage>
          <AlertTriangle size={20} />
          <span>Os campos obrigatórios não foram preenchidos</span>
        </ErrorMessage>
      )}

      {showSuccess && (
        <SuccessMessage>
          <CheckCircle size={20} />
          <span>Sucesso Psicobank ativado!</span>
        </SuccessMessage>
      )}
    </>
  );
}
