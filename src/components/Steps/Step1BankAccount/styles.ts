import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 500px;
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
  margin-bottom: 16px;

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

export const InputField = styled.input.attrs<{ as?: string }>((props) => ({
  as: props.as,
}))<{ hasError?: boolean }>`
  width: 100%;
  height: 40px;
  padding: 8px 12px;
  border: 1px solid ${(props) => (props.hasError ? "#F44336" : "#E5E7EB")};
  border-radius: 4px;
  font-size: 14px;
  color: #374151;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: ${(props) => (props.hasError ? "#F44336" : "#334094")};
  }
`;

export const SelectField = styled.select<{ hasError?: boolean }>`
  width: 100%;
  height: 40px;
  padding: 8px 12px;
  border: 1px solid ${(props) => (props.hasError ? "#F44336" : "#E5E7EB")};
  border-radius: 4px;
  font-size: 14px;
  background: white;
  color: #374151;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.hasError ? "#F44336" : "#334094")};
  }
`;
