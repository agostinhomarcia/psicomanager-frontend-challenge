import { createContext, useContext, useState, ReactNode } from "react";

interface PsicoBankContextData {
  isModalOpen: boolean;
  currentStep: number;
  openModal: () => void;
  closeModal: () => void;
  nextStep: () => void;
  previousStep: () => void;
}

const PsicoBankContext = createContext({} as PsicoBankContextData);

export function PsicoBankProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const openModal = () => {
    setIsModalOpen(true);
    setCurrentStep(1);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentStep(1);
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const previousStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <PsicoBankContext.Provider
      value={{
        isModalOpen,
        currentStep,
        openModal,
        closeModal,
        nextStep,
        previousStep,
      }}
    >
      {children}
    </PsicoBankContext.Provider>
  );
}

export const usePsicoBank = () => useContext(PsicoBankContext);
