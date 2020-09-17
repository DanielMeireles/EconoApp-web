import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${({ theme }) => theme.colors.inputBackground};
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid ${({ theme }) => theme.colors.inputBackground};
  color: ${({ theme }) => theme.colors.inputText};

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${({ theme }) => theme.colors.inputError};
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: ${({ theme }) => theme.colors.inputFocused};
      border-color: ${({ theme }) => theme.colors.inputFocused};
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: ${({ theme }) => theme.colors.inputFocused};
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: ${({ theme }) => theme.colors.inputText};

    &::placeholder {
      color: ${({ theme }) => theme.colors.inputPlaceholder};
    }
  }

  svg {
    ${(props) =>
      props.isErrored &&
      css`
        color: ${({ theme }) => theme.colors.inputError};
      `}
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: ${({ theme }) => theme.colors.inputError};
    color: ${({ theme }) => theme.colors.tooltipText};

    &::before {
      border-color: ${({ theme }) => theme.colors.inputError} transparent;
    }
  }
`;
