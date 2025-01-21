import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 56px;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  padding: 0 16px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 24px;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
  flex: 1;

  input {
    width: 200px;
    height: 36px;
    padding: 0 12px;
    padding-left: 36px;
    border: 1px solid #e5e7eb;
    border-radius: 6px 0 0 6px;
    font-size: 14px;
    color: #374151;

    &::placeholder {
      color: #9ca3af;
    }

    &:focus {
      outline: none;
      border-color: #0047b6;
    }
  }

  button {
    height: 36px;
    padding: 0 8px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-left: none;
    border-radius: 0 6px 6px 0;
    color: #6b7280;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;

    img {
      width: 16px;
      height: 16px;
    }

    &:hover {
      background: #f9fafb;
    }
  }

  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-image: url("../../../public/imagens/search.png");
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;

  .icon-button {
    width: 48px;
    height: 48px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    color: #6b7280;
    cursor: pointer;

    &:hover {
      background: #f9fafb;
    }
  }

  .profile-button {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f3f4f6;
    border: none;
    cursor: pointer;

    &:hover {
      background: #e5e7eb;
    }
  }
`;
