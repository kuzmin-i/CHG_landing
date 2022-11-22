import styled from "styled-components";
import { Space } from "antd";

export const Content = styled.div`
  width: 100%;
  display: flex;

  align-items: stretch;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  min-width: 488px;
  background-color: rgba(255, 255, 255, 0.2);
  height: 100%;

  padding: 48px;

  @media (max-width: 768px) {
    & {
      padding: 48px 30px;

      @media (max-width: 576px) {
        & {
          padding: 30px 15px;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    & {
      height: max-content;
      min-width: 0;
    }
  }
`;

export const Right = styled.div`
  width: 100%;
  position: relative;

  padding: 48px 48px 0px 48px;
  max-width: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    & {
      padding: 30px 30px 0 30px;

      @media (max-width: 576px) {
        & {
          padding: 15px 15px 0px 15px;
        }
      }
    }
  }

  & .slick-slide:not(.slick-active) {
    height: 0px;
  }

  & .slick-active {
    min-height: max-content;
  }
`;

export const Slide = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  max-width: 100%;
  overflow: hidden;

  &&& {
    &,
    & * {
      color: white;
    }
  }

  display: flex;
  flex-direction: column;
`;

export const SiteScreen = styled.div`
  width 100%;
  overflow: hidden;
  width: 100%;
  padding-top: 47%;
  background: white;
  border-radius: 24px 24px 0 0 ;

  background: url("${({ url }) => (url ? `/screens/${url}.jpg` : ``)}");
  background-size: cover;
  background-position: top
`;

export const Nav = styled.div`
  display: flex;
  & span {
    line-height: 1.34;
  }

  cursor: pointer;

  & .anticon {
    font-size: 1.5rem;
    transform: translateY(6px);
  }

  ${({ active }) =>
    active
      ? `
    && {
      opacity: 1
    }
  `
      : `
      &&& {
        opacity: .5;

        & span {
          font-weight: 400
        }
      }
  
  `}

  && > * + * {
    padding-left: 30px;
  }

  &&&&&&& {
    @media (max-width: 1200px) {
      & {
        max-width: 240px;
      }

      & > * + * {
        padding-left: 16px;
      }
    }
  }
`;

export const Link = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
  &&::before {
    content: "";
    margin-right: 6px;

    min-width: 32px;
    height: 32px;
    background: url("/icons/link.svg");
    background-size: cover;
  }

  &,
  & * {
    color: white;
    text-decoration: underline;
    font-size: 1rem;
  }
`;

export const LinkPanel = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;

  display: flex;
  flex-wrap: wrap;

  && > * {
    margin-right: 24px;
    margin-bottom: 8px;
  }
`;

export const Scroll = styled.div`
  width: 100%;
  height: max-content;

  &&::-webkit-scrollbar {
    display: none;
  }

  && {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  @media (max-width: 1200px) {
    overflow-x: scroll;
    overflow-y: hidden;
  }
`;

export const Line = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    && > * + * {
      margin-top: 16px;
    }
  }

  @media (max-width: 1200px) {
    & {
      flex-direction: row;
      min-width: max-content;

      && > * + * {
        margin-left: 8px;
      }
    }
  }
`;
