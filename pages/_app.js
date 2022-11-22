import "../styles/globals.css";
import { createGlobalStyle } from "styled-components";
import { colors } from "../components/common/__cfgs";
import "antd/dist/reset.css";

const GlobalStyle = createGlobalStyle`
  body {
    &, & * {
      font-family: 'Inter', sans-serif !important;
      color: ${colors.grey}
    }
  }


  &&&&& {
    & .ant-btn {
      &, &:hover, &:focus {
        border-radius: 4px;
        box-shadow: none;
        border: 0px;
        font-size: 1rem;
        cursor: pointer;
        padding-left: 16px;
        padding-right: 16px;

        background: ${colors.lightgrey};
        &, & * {
          color: ${colors.grey}
        }

        &.ant-btn-primary {
          & {
            background: ${colors.blue};

            &, & * {
              color: ${colors.white}
            }
          }
          
        }

        min-height: 48px;
      }
    }

    & .ant-input {
      width: 100%;
      min-height: 48px;
      background: white;
      border-radius: 4px;
      border: 1px solid ${colors.grey}
    }
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
