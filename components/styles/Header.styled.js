import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 24px 16px;
  background-color: #ededed;
  border-bottom: 1px solid #999;
  z-index: 10;

  .burger {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 16px;
    height: 12px;
    cursor: pointer;
    z-index: 1;

    .line {
      width: 100%;
      height: 2px;
      background-color: #000;
    }
  }

  .logo {
    font-family: "Raleway", sans-serif;
    font-size: 22px;
    font-weight: 700;
    z-index: 1;
  }

  .cart {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
`;

export const Utility = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 75px;
  width: 100%;
  padding: 16px;
  background-color: #ededed;
  border-bottom: 1px solid #999;

  .filter {
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 600;

    svg {
      margin-right: 8px;
    }
  }

  .searchbar {
      position: absolute;
  }
`;
