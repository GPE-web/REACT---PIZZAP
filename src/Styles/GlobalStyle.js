import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif; 
    color: #1a1a1a;
    font-size: calc(1em + 0.1vw)
  }


  
  h1, h2, h3 {
    font-family: 'Oswald', sans-serif;
  }

  button, ConfirmButton { font-size: inherit };
  input { font-size: inherit };

  p {
    font-size: 0.8em;
  }

`
