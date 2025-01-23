import { createContext, useContext, useState, ReactNode } from "react";
import { FormData, PsicoBankContextData } from "../types/psicoBank";

const PsicoBankContext = createContext({} as PsicoBankContextData);

export function PsicoBankProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    step1: {},
    step2: {},
    step3: {},
  });

  const updateFormData = (
    step: keyof FormData,
    data: Partial<FormData[keyof FormData]>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [step]: data,
    }));
  };

  const openModal = () => {
    setIsModalOpen(true);
    setCurrentStep(1);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentStep(1);
    setFormData({
      step1: {},
      step2: {},
      step3: {},
    });
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const previousStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = () => {
    console.log("Dados do formulário:", formData);
    closeModal();
  };
  return (
    <PsicoBankContext.Provider
      value={{
        isModalOpen,
        currentStep,
        formData,
        updateFormData,
        openModal,
        closeModal,
        nextStep,
        previousStep,
        handleSubmit,
      }}
    >
      {children}
    </PsicoBankContext.Provider>
  );
}

export const usePsicoBank = () => useContext(PsicoBankContext);
