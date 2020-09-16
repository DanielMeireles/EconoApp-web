import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Poppins';
`;

export const Header = styled.header`
  padding: 32px 0;
  background: ${({ theme }) => theme.colors.headerBackground};
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 80px;
  }

  button {
    margin-left: auto;
    background: none;
    border: none;

    svg {
      color: ${({ theme }) => theme.colors.headerTertiaryText};
    }
  }
`;

export const HeaderProfile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: ${({ theme }) => theme.colors.primaryText};
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.secondaryText};

      transition: opacity 0.3s;
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
