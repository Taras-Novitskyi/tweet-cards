import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background-color: #FAFAFA;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
h1, h2 {
  padding: 0;
  margin: 0;
}
img{
  display: block;
}
p{
  padding: 0;
  margin: 0;
}
button, a {
  cursor: pointer;
	text-decoration: none;
}
`;
