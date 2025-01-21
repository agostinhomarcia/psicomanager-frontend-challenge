import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  min-width: 320px;
  height: 100vh;
  background-color: #ffffff;
  position: relative;
  overflow-x: auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Content = styled.main`
  margin-left: 90px;
  margin-top: 56px;
  flex: 1;
  height: calc(100vh - 56px);
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 120px;
    padding: 24px;
  }
`;

export const ActivationSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 220px;
  gap: 24px;

  img {
    width: 120px;
    height: 120px;
    margin-bottom: 8px;
  }

  p {
    color: #374151;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
  }
`;

export const ActivateButton = styled.button`
  background-color: #334094;
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  border: none;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2a357a;
  }
`;
