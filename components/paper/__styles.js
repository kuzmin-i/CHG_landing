import styled from "styled-components";
import { colors } from "../common/__cfgs";

export const Wrapper = styled.div`
  background: ${colors.lightgrey};
  border-radius: 24px;

  width: 100%;

  padding: 48px;
  display: flex;

  @media (max-width: 768px) {
    & {
      padding: 48px 30px;

      @media (max-width: 768px) {
        & {
          padding: 30px 15px;
        }
      }
    }
  }

  &,
  & * {
    color: ${colors.grey};
  }

  ${({ align }) =>
    align
      ? `
    && {
      align-items: ${align}
    }
  `
      : ``}

  ${({ blue }) =>
    blue
      ? `
    &&& {
      background: ${colors.blue};

      &, & * {
        color: ${colors.white}
      }
    }
  `
      : ``}

      ${({ nopadding }) =>
    nopadding
      ? `
        &&& {
          padding: 0px;
          flex-direction: row;
        }
      `
      : ``}
`;
