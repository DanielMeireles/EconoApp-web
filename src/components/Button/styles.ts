import styled from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  isLoading: number;
}

export const Container = styled.button<ContainerProps>`
  background: ${({ theme }) => theme.colors.buttonBackground};
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: ${({ theme }) => theme.colors.buttonText};
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.3s;

  &:hover {
    background: ${({ theme }) => shade(0.2, theme.colors.buttonBackground)};
  }

  cursor: ${({ isLoading }) => (isLoading ? 'not-allowed' : 'pointer')};
`;
