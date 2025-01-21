import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;

  img {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px 12px;
  padding-right: ${(props) => (props.disabled ? "30px" : "12px")};
  border: 1px solid #ddd;
  border-radius: 4px;
  background: ${(props) => (props.disabled ? "#f5f5f5" : "white")};
`;
