import styled from "@emotion/styled";

const BotBar = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 0px 16px 0px 4px;
  align-items: center;
  gap: 276px;
  flex-shrink: 0;
  h2 {
    font-weight: 400;
  }

  button {
    display: flex;
    width: 48px;
    height: 48px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border: none;
    background: transparent;
    cursor: pointer;
  }
`;

export default BotBar;
