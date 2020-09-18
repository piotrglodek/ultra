import { createGlobalStyle } from 'styled-components';

export const theme = {
  color: {
    lightPrimary: '#6370f8',
    primary: '#4b59f7',
    lightSecondary: '#212b45',
    secondary: '#101522',
    black: 'rgba(0, 0, 0, 0.87)',
    white: '#fbfbfb',
    grey: '#a9b3c1',
  },
};

export const GlobalStyles = createGlobalStyle`
  *,*::after,*::before{
      box-sizing:border-box;
  }

  html {
  /* 1rem = 10px */
  font-size: 62.5%;
}
  
  body{
      margin:0;
      font-family: 'Source Sans Pro',sans-serif;
      font-size:1.6rem;
  }
`;
