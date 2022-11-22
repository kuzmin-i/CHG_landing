import styled from "styled-components";
import { colors } from "../common/__cfgs";

export const Wrapper = styled.div`
  width: 100%;
  height: 96px;
  border-bottom: 1px solid ${colors.grey};

  margin-bottom: 32px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  cursor: pointer;
  min-width: 179px;
  height: 45px;
  background: url("/icons/logo.svg");
  background-size: cover;
`;

export const BtnGroup = styled.div`
  display: flex;

  && > * + * {
    margin-left: 5px;
  }
`;
