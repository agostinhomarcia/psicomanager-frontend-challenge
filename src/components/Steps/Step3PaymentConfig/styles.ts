import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;

  img {
    position: absolute;
    right: 12px;
    top: 70%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  input {
    padding-right: 30px;
  }
`;

export const InfoBox = styled.div`
  background: #ecf5fe;
  border-radius: 4px;
  padding: 16px;
  color: #334094;
  font-size: 14px;
  line-height: 1.5;
`;

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  margin-top: 4px;

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    cursor: pointer;
    border: 1px solid #ddd;
    border-radius: 2px;
    accent-color: #334094;
  }

  span {
    font-weight: normal;
    font-size: 14px;
    color: #666;
  }
`;

export const FineInput = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 26px;
  margin-top: 8px;

  span {
    white-space: nowrap;
    color: #666;
    font-size: 14px;
  }

  input {
    width: 100px;
    height: 32px;
    padding: 4px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;

    &::placeholder {
      color: #999;
    }
  }
`;

export const ErrorMessage = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background: #fff3f3;
  border: 1px solid #f44336;
  border-radius: 4px;
  padding: 12px;
  margin: 16px;
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    color: #f44336;
  }

  span {
    color: #f44336;
    font-size: 14px;
  }
`;

export const SuccessMessage = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background: #f0fff0;
  border: 1px solid #28a745;
  border-radius: 4px;
  padding: 12px;
  margin: 16px;
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    color: #28a745;
  }

  span {
    color: #28a745;
    font-size: 14px;
  }
`;
