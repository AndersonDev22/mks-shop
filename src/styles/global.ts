import { createGlobalStyle } from 'styled-components';

import { defaultTheme } from './themes/default';

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus{
    outline: 0;
  }

  body{
    background-color: ${defaultTheme.white};
    color: ${defaultTheme.black};
    -webkit-font-smoothing: antialiased;
  }

  body, button{ 
    font-family: Montserrat, sans-serif !important
  }

  button{
    cursor: pointer;
  }
`;
