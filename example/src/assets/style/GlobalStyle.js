import { createGlobalStyle } from 'styled-components'


const GlobalStyle  = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1rem;
  }

  ul, ol {
    list-style: none;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  a {
    text-decoration: none;
    color: #000;
    display: inline-block;
  }

  label, button {
    cursor: pointer;
  }
`

export default GlobalStyle;