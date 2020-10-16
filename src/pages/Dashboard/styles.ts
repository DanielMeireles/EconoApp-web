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

export const ShoppingListsTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const ShoppingLists = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;

export const ShoppingListContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 10px;
  padding: 20px;
  align-items: center;
  width: 400px;
  margin-bottom: 15px;
`;

export const ShoppingListImage = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 36px;
`;

export const ShoppingListInfo = styled.div`
  flex: 1;
  margin-left: 24px;
`;

export const ShoppingListName = styled.h1`
  color: ${({ theme }) => theme.colors.cardTitle};
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Calendar = styled(FiCalendar)`
  color: ${({ theme }) => theme.colors.cardElement};
`;

export const Info = styled(FiInfo)`
  color: ${({ theme }) => theme.colors.cardElement};
`;

export const ShoppingListMeta = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export const ShoppingListMetaText = styled.span`
  margin-left: 8px;
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.cardText};
`;
