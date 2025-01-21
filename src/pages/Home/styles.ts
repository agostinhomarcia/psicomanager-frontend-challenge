import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 1276px;
  height: 712px;
  background-color: #ffffff;
  position: relative;
`;

export const Content = styled.main`
  margin-left: 90px;
  margin-top: 56px;
  width: calc(1276px - 90px);
  height: calc(712px - 56px);
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ActivationSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 220px;
  height: 372px;
  gap: 10px;

  img {
    width: 120px;
    height: 120px;
  }

  p {
    color: #374151;
    font-size: 16px;
    line-height: 1.5;
    margin: 16px 0;
  }
`;

export const ActivateButton = styled.button`
  background-color: #0047b6;
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #003d9e;
  }
`;
