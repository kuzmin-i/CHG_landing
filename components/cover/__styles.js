import styled from "styled-components";

export const CoverWrapper = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 1270px) {
    & {
      max-width: 650px;
    }
  }

  ${({ type }) =>
    type === "cover"
      ? `
  margin-top: 3rem;

  @media (max-width: 576px) {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  `
      : ``}

  flex-direction: column;

  ${({ align }) =>
    align === "center"
      ? `
    &&& {
      align-items: center;
    }
  
  `
      : ``}

  & {
    align-items: flex-start;

    & *:not(.ant-btn) {
      text-align: left;
    }
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
  margin-top: 16px;

  width: 100%;
  max-width: 1340px;

  flex-wrap: wrap;
`;

export const Thumb = styled.div`
  @media (max-width: 1240px) {
    display: none;
  }

  height: calc(805px * 0.7);
  min-width: calc(635px * 0.7);
  background: lightgrey;
  margin-left: 30px;

  background: url("/icons/cover.svg");
  background-size: cover;
`;
