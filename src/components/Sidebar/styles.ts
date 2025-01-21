import styled from "styled-components";

export const Container = styled.aside`
  width: 90px;
  height: 100vh;
  background-color: #ffffff;
  border-right: 1px solid #e5e7eb;
  padding: 24px 4px;
  display: flex;
  flex-direction: column;
  margin-top: 56px;
`;

export const MenuList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

interface MenuItemProps {
  isActive?: boolean;
}

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
`;
