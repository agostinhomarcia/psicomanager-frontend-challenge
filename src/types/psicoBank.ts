export interface FormData {
  step1: {
    professional?: string;
    bank?: string;
    accountType?: string;
    agency?: string;
    accountNumber?: string;
    personType?: "PF" | "PJ";
    cpf?: string;
    cnpj?: string;
    fullName?: string;
    phone?: string;
    cep?: string;
    state?: string;
    city?: string;
    address?: string;
    number?: string;
  };
  step2: {
    professional?: string;
    dynamicMarking?: string;
    messageContent?: string;
  };
  step3: {
    professional?: string;
    paymentMethods?: {
      pix: boolean;
      creditCard: boolean;
      bankSlip: boolean;
    };
    fineConfig?: {
      chargeFine: boolean;
      finePercentage: string;
      chargeInterest: boolean;
      interestValue: string;
    };
  };
}

export interface PsicoBankContextData {
  isModalOpen: boolean;
  currentStep: number;
  formData: FormData;
  updateFormData: (
    step: keyof FormData,
    data: Partial<FormData[keyof FormData]>
  ) => void;
  openModal: () => void;
  closeModal: () => void;
  nextStep: () => void;
  previousStep: () => void;
  handleSubmit: () => void;
}
