import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
	margin: 0;
  font-family:'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	color: ${theme.colors.fontMain};
	line-height: 1.2;
}

a {
	text-decoration: none;
}

ul {
	list-style: none
}

button {
	background-color: unset;
	border: none;
	cursor: pointer;
	color: ${theme.colors.fontAccent}
}

section {
	padding: 200px 0
}

section: nth-of-type(odd) {
background-color: ${theme.colors.primaryBG};
}
section: nth-of-type(even) {
background-color: ${theme.colors.secondaryBG};
}

h3 {
	color: #015761;
	font-family: Poppins;
font-size: 28px;
font-weight: 500;
line-height: 26px;
letter-spacing: 0px;
text-align: center;
}

p {
	color: #015761;
font-family: Poppins;
font-size: 18px;
font-weight: 300;
line-height: 26px;
letter-spacing: 0px;
text-align: left;
}
&:focus-visible {
      outline: 1px solid ${theme.colors.fontAccent};
    }	

`
