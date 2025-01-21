import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(125, 136, 148, 0.5); // #7D8894 50%
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 1000;
  padding-top: 10px;
`;

export const ModalContainer = styled.div`
  background: #ffffff;
  border-radius: 4px;
  width: 880px;
  max-height: 900px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 32px 32px rgba(0, 0, 0, 0.15);

  form {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
  }

  @media (max-width: 920px) {
    width: 95%;
    max-height: 90vh;
    margin: 0 10px;
  }
`;

export const ModalHeader = styled.div`
  padding: 24px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 0;
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 16px;

    h2 {
      font-size: 1.25rem;
    }
  }
`;

export const ModalContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 24px;
  min-height: 0;
  max-height: calc(90vh - 200px);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
    max-height: calc(90vh - 180px);
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 24px;
  border-top: 1px solid #eee;

  button {
    padding: 8px 16px;
    border-radius: 4px;
    font-weight: 500;

    &.cancel {
      background: transparent;
      border: 1px solid #ddd;
    }

    &.next {
      background: #334094;
      color: #d5dbff;
      border: none;
    }

    &.back {
      background: transparent;
      border: 1px solid #ddd;
    }
  }

  @media (max-width: 768px) {
    padding: 16px;

    button {
      padding: 6px 12px;
      font-size: 0.9rem;
    }
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #6b7280;
`;

export const StepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 40px;
  background: #f8f9fa;

  @media (max-width: 768px) {
    padding: 16px;
    overflow-x: auto;
    gap: 16px;
  }
`;

export const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

interface StepProps {
  isActive: boolean;
}

export const StepIndicator = styled.div<StepProps>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.isActive ? "#96A5FF" : "#E5E7EB")};
  color: ${(props) => (props.isActive ? "white" : "#6B7280")};
  font-weight: 600;
`;

export const StepLabel = styled.span<StepProps>`
  color: ${(props) => (props.isActive ? "#111827" : "#6B7280")};
  font-size: 14px;
`;

export const StepConnector = styled.div<StepProps>`
  flex: 1;
  height: 2px;
  background: ${(props) => (props.isActive ? "#96A5FF" : "#E5E7EB")};
  margin: 0 8px;
`;
