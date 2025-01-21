import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  border-radius: 8px;
  width: 100%;
  max-width: 800px;
  min-height: 200px;
  padding: 24px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 18px;
    color: #111827;
  }
`;

export const ModalContent = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding-top: 24px;

  button {
    padding: 8px 16px;
    border-radius: 6px;
    font-weight: 500;

    &.cancel {
      background: transparent;
      color: #6b7280;
    }

    &.next {
      background: #0047b6;
      color: white;
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
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
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
  background: ${(props) => (props.isActive ? "#0047B6" : "#E5E7EB")};
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
  background: ${(props) => (props.isActive ? "#0047B6" : "#E5E7EB")};
  margin: 0 8px;
`;
