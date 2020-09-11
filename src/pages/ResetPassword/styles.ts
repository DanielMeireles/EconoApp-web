import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

// import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  font-family: 'Poppins';
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: ${({ theme }) => theme.colors.primaryText};
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: ${({ theme }) => shade(0.2, theme.colors.primaryText)};
      }
    }
  }

  > a {
    color: ${({ theme }) => theme.colors.secondaryText};
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.3s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${({ theme }) => shade(0.2, theme.colors.secondaryText)};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  /* background: url() no-repeat center; */
  background-size: cover;
`;
