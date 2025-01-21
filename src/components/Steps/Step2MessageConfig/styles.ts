import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
`;

export const FormHeader = styled.div`
  margin-bottom: 24px;
  margin-top: 24px;
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
`;

export const InputField = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px 12px;
  padding-right: 30px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
`;

export const SelectField = styled.select`
  width: 100%;
  height: 40px;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
`;

export const InfoBox = styled.div`
  background: #ecf5fe;
  border-radius: 4px;
  padding: 16px;
  color: #2196f3;
  font-size: 14px;
  line-height: 1.5;
`;

export const DynamicMarkingContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  button {
    padding: 8px 16px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    white-space: nowrap;

    &:hover {
      background: #0056b3;
    }
  }
`;

export const EditorContainer = styled.div`
  .ql-editor {
    min-height: 200px;
  }

  .ql-toolbar {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .ql-container {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;
