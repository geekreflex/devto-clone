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
  font-family: 'Poppins'
}

a {
  text-decoration: none
}
`;
