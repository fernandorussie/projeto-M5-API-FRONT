import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    
  }
  a{
    color: white;
  }
`;
 
export default GlobalStyle;