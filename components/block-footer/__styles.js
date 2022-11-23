import styled from "styled-components";
import { Form as AntForm } from "antd";
import { colors } from "../common/__cfgs";

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  column-gap: 12px;
  row-gap: 12px;
  align-items: start;
  position: relative;

  padding-bottom: 96px;

  @media (max-width: 1200px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;

export const Left = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-right: 48px;

  @media (max-width: 1200px) {
    padding-right: 0px;
  }
`;

export const HalfOpacity = styled.div`
  opacity: 0.6;
`;

export const Form = styled.form`
  position: relative;
  width: 100%;

  & .ant-input {
    min-height: 6rem;
    margin-bottom: 2rem;

    &,
    & *,
    &::placeholder {
      font-size: 2rem;
    }
  }

  && .ant-btn {
    width: 100%;
    height: 6rem;
    font-size: 2rem;
    margin-top: 1.5rem;
  }

  && .ant-form-item {
    margin-bottom: 0px;
  }

  && .ant-form-item-explain-error {
    font-size: 1.25rem;
    transform: translateY(-1.25rem);
  }
`;

export const WhitePlash = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(30px);

  && * {
    color: ${colors.grey};
  }

  && .ant-btn {
    &,
    &:hover,
    &:focus {
      color: ${colors.white};
    }
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;
