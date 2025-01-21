import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 800px;
  margin: 0 auto;
`;

export const FormHeader = styled.div`
  h2 {
    font-size: 16px;
    color: #374151;
    margin-bottom: 16px;
  }
`;

export const WarningBox = styled.div`
  background: #fffad6;
  border-radius: 6px;
  padding: 16px;
  margin-top: 16px;

  strong {
    color: #92400e;
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
  }

  ul {
    list-style: disc;
    margin-left: 16px;
    color: #92400e;
    font-size: 14px;
    line-height: 1.5;

    li {
      margin-bottom: 4px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    font-size: 14px;
    color: #374151;
    font-weight: 500;
  }
`;

export const InputField = styled.input`
  height: 36px;
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
  height: 36px;
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
