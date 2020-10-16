import styled from 'styled-components';
import { FiCalendar, FiInfo } from 'react-icons/fi';

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
