import styled from "styled-components";

export const CoverWrapper = styled.div`
  display: flex;
  width: 100%;

  flex-direction: column;
  align-items: center;

  &&&& {
    @media (max-width: 576px) {
      & {
        align-items: flex-start;

        & *:not(.ant-btn) {
          text-align: left;
        }
      }
    }
  }

  & * {
    text-align: center;
  }

  & .ant-btn {
    &,
    &:hover,
    &:focus {
      width: 520px;
      height: 6rem;
      font-size: 2rem;
    }
  }

  @media (max-width: 768px) {
    & .ant-btn {
      &,
      &:hover,
      &:focus {
        width: 420px;

        @media (max-width: 576px) {
          width: 100%;
        }
      }
    }
  }
`;

export const KPIS = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 64px;

  width: 100%;
  max-width: 1340px;

  flex-wrap: wrap;
`;
