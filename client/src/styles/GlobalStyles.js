import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*, 
*::after,
*::before {
  padding: 0;
  box-sizing: border-box;
  margin: 0;
}

body {
  background-color: ${(props) => props.theme.secondary};
  font-family: 'Poppins';
  color: ${(props) => props.theme.textColor1};
  overflow-y: scroll;
}



a {
  text-decoration: none;
}

.devto-icon {
  fill: ${(props) => props.theme.textColor1};
}

.auth-btn-icon {
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  color: #ffffff;
}

.hidden .header, .hidden .footer {
  display: none;
}

.btn {
    border: none;
    padding: 8px;
    font-size: 16px;
    margin-left: 5px;
    border-radius: 5px;
    color: ${(props) => props.theme.textColor1};
    background-color: transparent;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1.5;

    :hover {
      background-color: ${(props) => props.theme.bgHover1};
      color: ${(props) => props.theme.colorHover1};
      svg {
      fill: ${(props) => props.theme.colorHover2};
      }
    }
  }

  .btn-clear {
    padding: 8px 14px;
    border: 2px solid ${(props) => props.theme.borderColor};
    outline: none;
    cursor: pointer;
    background-color: transparent;
    color: ${(props) => props.theme.textColor2};
    font-size: 16px;
    border-radius: 6px;
  }

  .btn-danger {
    padding: 8px 14px;
    border: 2px solid transparent;
    background-color: transparent;
    color: ${(props) => props.theme.danger};
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;

    :hover {
      background-color: ${(props) => props.theme.borderColor}50;
    }
  }

`;
