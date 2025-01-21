import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 14px;
    color: #374151;
    font-weight: 500;
  }
`;

export const InputField = styled.input`
  height: 40px;
  padding: 0 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;
  color: #374151;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #0047b6;
    box-shadow: 0 0 0 1px #0047b6;
  }

  &:disabled {
    background-color: #f3f4f6;
    cursor: not-allowed;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const SelectField = styled.select`
  height: 40px;
  padding: 0 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;
  color: #374151;
  background-color: white;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #0047b6;
    box-shadow: 0 0 0 1px #0047b6;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: #dc2626;
`;
