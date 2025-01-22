import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
`;

export const FormHeader = styled.div`
  margin-bottom: 16px;
  margin-top: 24px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;

  img {
    position: absolute;
    right: 12px;
    top: 70%;
    transform: translateY(-50%);
    pointer-events: none;
  }
`;

export const InsertButton = styled.button`
  background-color: #fff;
  border: 1px solid #334094;
  border-radius: 4px;
  padding: 4px 12px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  height: 28px;

  &:hover {
    background: #f5f5f5;
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
    width: 133px;
    height: 32px;
    padding: 4px 32px 4px 32px;
    background: #fff;
    border: 1px solid #334094;
    color: #334094;
    border-radius: 8px;
    cursor: pointer;
    white-space: nowrap;
  }
`;

export const EditorContainer = styled.div`
  .ql-editor {
    min-height: 200px;
  }

  .ql-toolbar {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background-color: #f8f9fa;
    border-color: #dfe3e8;
    padding: 4px 8px;
  }

  .ql-container {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-color: #dfe3e8;
  }

  .ql-toolbar button {
    width: 24px;
    height: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    margin: 0 2px;
    border-radius: 4px;

    &:hover {
      background-color: #e9ecef;
    }

    &.ql-active {
      background-color: #e9ecef;
    }

    svg {
      color: #6c757d;
    }
  }

  .ql-formats {
    margin-right: 8px;
    border-right: 1px solid #dfe3e8;
    padding-right: 8px;

    &:last-child {
      border-right: none;
    }
  }

  .ql-undo,
  .ql-redo {
    color: #6c757d;

    svg {
      width: 16px;
      height: 16px;
    }

    &:hover {
      color: #495057;
    }
  }

  .ql-list,
  .ql-bullet {
    color: #6c757d;

    svg {
      width: 16px;
      height: 16px;
    }

    &:hover {
      color: #495057;
    }
  }

  .ql-stroke {
    stroke: currentColor;
  }

  .ql-fill {
    fill: currentColor;
  }
`;
