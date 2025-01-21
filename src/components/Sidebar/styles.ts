import styled from "styled-components";

export const Container = styled.aside`
  width: 90px;
  height: 712px;
  background-color: #ffffff;
  border-right: 1px solid #e5e7eb;
  padding: 4px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const MenuList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;
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
  height: 62px;
  padding: 12px 16px;
  border: none;
  border-radius: 16px;
  background: ${(props) => (props.isActive ? "#0047B6" : "transparent")};
  color: ${(props) => (props.isActive ? "#fff" : "#374151")};
  cursor: pointer;
  transition: all 0.2s;

  .icon {
    font-size: 24px;
    margin-bottom: 4px;
  }

  .label {
    font-size: 12px;
    text-align: center;
    line-height: 1.2;
  }

  &:hover {
    background: ${(props) => (props.isActive ? "#0047B6" : "#F3F4F6")};
  }
`;
