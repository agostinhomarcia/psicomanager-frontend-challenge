import styled from "styled-components";

interface MenuItemProps {
  isActive?: boolean;
}

export const Container = styled.aside`
  width: 90px;
  height: 100vh;
  background-color: #ffffff;
  border-right: 1px solid #e5e7eb;
  padding: 24px 4px;
  display: flex;
  flex-direction: column;
  margin-top: 56px;
  position: fixed;
  left: 0;
  z-index: 10;

  @media (max-width: 768px) {
    width: 100%;
    height: 64px;
    margin-top: 56px;
    padding: 8px;
    border-right: none;
    border-bottom: 1px solid #e5e7eb;
  }
`;

export const MenuList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: row;
    overflow-x: auto;
    gap: 12px;
    padding: 0 8px;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const MenuItem = styled.button<MenuItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 70px;
  padding: 8px;
  border: none;
  border-radius: 20px;
  background: ${(props) => (props.isActive ? "#334094" : "transparent")};
  color: ${(props) => (props.isActive ? "#fff" : "#374151")};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  transition: all 0.2s;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 6px;

    img {
      width: 80px;
      height: 62px;
    }
  }

  .label {
    font-size: 11px;
    text-align: center;
    line-height: 1.2;
    color: ${(props) => (props.isActive ? "#fff" : "#6B7280")};
  }

  &:disabled {
    opacity: ${(props) => (props.isActive ? 1 : 0.7)};
  }

  &:hover:not(:disabled) {
    background: ${(props) => (props.isActive ? "#334094" : "#F3F4F6")};
  }

  @media (max-width: 768px) {
    width: 64px;
    height: 48px;
    padding: 4px;
    border-radius: 12px;

    .icon img {
      width: 20px;
      height: 20px;
    }

    .label {
      font-size: 10px;
    }
  }
`;
