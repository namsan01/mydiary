import styled from "@emotion/styled";

const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  padding: 8px 4px;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  background: #fef7ff;
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

export default TopBar;
