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
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ModalHeader = styled.div`
  padding: 24px;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 20px;
    color: #111827;
    font-weight: 600;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #6b7280;

  &:hover {
    color: #374151;
  }
`;

export const StepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  position: relative;
`;

export const Step = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  position: relative;
`;

interface StepProps {
  isActive: boolean;
}

export const StepIndicator = styled.div<StepProps>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${(props) => (props.isActive ? "#0047B6" : "#E5E7EB")};
  color: ${(props) => (props.isActive ? "white" : "#6B7280")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  transition: all 0.2s;
`;

export const StepLabel = styled.span<StepProps>`
  margin-left: 12px;
  color: ${(props) => (props.isActive ? "#0047B6" : "#6B7280")};
  font-weight: ${(props) => (props.isActive ? "600" : "400")};
  font-size: 14px;
  transition: all 0.2s;
`;

export const StepConnector = styled.div<StepProps>`
  position: absolute;
  top: 16px;
  left: calc(50% + 16px);
  right: calc(-50% + 16px);
  height: 2px;
  background: ${(props) => (props.isActive ? "#0047B6" : "#E5E7EB")};
  transition: all 0.2s;
`;

export const ModalContent = styled.div`
  padding: 24px;
  overflow-y: auto;
  flex: 1;
`;

export const ModalFooter = styled.div`
  padding: 24px;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: flex-end;
  gap: 12px;

  button {
    padding: 10px 20px;
    border-radius: 6px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;

    &.cancel {
      background: none;
      border: 1px solid #e5e7eb;
      color: #6b7280;

      &:hover {
        background: #f9fafb;
      }
    }

    &.back {
      background: none;
      border: 1px solid #0047b6;
      color: #0047b6;

      &:hover {
        background: #f0f7ff;
      }
    }

    &.next {
      background: #0047b6;
      border: none;
      color: white;

      &:hover {
        background: #003d9e;
      }
    }
  }
`;
