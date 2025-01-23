export interface PaymentConfigFormData {
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

export interface MessageConfigFormData {
  professional: string;
  dynamicMarking: string;
  messageContent: string;
}

export interface BankAccountFormData {
  professional: string;
  bank: string;
  accountType: string;
}
