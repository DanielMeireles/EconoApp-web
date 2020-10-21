import styled from 'styled-components';
import { FiCalendar, FiInfo } from 'react-icons/fi';

export const Container = styled.div`
  font-family: 'Poppins';
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
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
    cursor: pointer;

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
    cursor: pointer;
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

export const ContainerData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ShoppingLists = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  width: 400px;
`;

export const ShoppingListsTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const ShoppingListItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  width: 400px;
`;
