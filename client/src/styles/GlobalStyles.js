import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*, 
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: ${(props) => props.theme.secondary};
  font-family: 'Poppins';
  color: ${(props) => props.theme.textColor1};

}



a {
  text-decoration: none;
  color: #818cf8;
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

`;
