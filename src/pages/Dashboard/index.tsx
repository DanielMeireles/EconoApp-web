import React, { useEffect, useState, useCallback } from 'react';

import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

import {
  Container,
  Header,
  HeaderContent,
  HeaderProfile,
  ShoppingListsTitle,
  ShoppingLists,
  ShoppingListContainer,
  ShoppingListImage,
  ShoppingListInfo,
  ShoppingListName,
  Calendar,
  Info,
  ShoppingListMeta,
  ShoppingListMetaText,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

export interface ShoppingList {
  id: string;
  name: string;
  description: string;
  date: Date;
  user_id: string;
  image_url: string;
}

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  const [shoppingLists, setShoppingLists] = useState<ShoppingList[]>([]);

  const handleGetShoppingLists = useCallback(() => {
    api.get('/shoppinglists').then((response) => {
      const shoppingListsResponse: ShoppingList[] = response.data;
      setShoppingLists(
        shoppingListsResponse.sort((a, b) => {
          if (a.date > b.date) {
            return 1;
          }
          return -1;
        }),
      );
    });
  }, []);

  useEffect(() => {
    handleGetShoppingLists();
  }, []);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Logo EconoApp" />
          <HeaderProfile>
            <img src={user.avatar_url} alt={user.name} />

            <div>
              <span>Bem-vindo,</span>
              <Link to="/profile">
                <strong>{user.name}</strong>
              </Link>
            </div>
          </HeaderProfile>
          <button type="button" onClick={signOut}>
            <FiPower size={20} />
          </button>
        </HeaderContent>
      </Header>
      <ShoppingLists>
        <ShoppingListsTitle>Listas de Compras</ShoppingListsTitle>
        {shoppingLists.map((shoppingList) => (
          <ShoppingListContainer>
            <ShoppingListImage src={shoppingList.image_url} />
            <ShoppingListInfo>
              <ShoppingListName>{shoppingList.name}</ShoppingListName>
              <ShoppingListMeta>
                <Calendar size={20} />
                <ShoppingListMetaText>
                  {format(new Date(shoppingList.date), 'dd/MM/yyyy')}
                </ShoppingListMetaText>
              </ShoppingListMeta>
              <ShoppingListMeta>
                <Info size={20} />
                <ShoppingListMetaText>
                  {shoppingList.description}
                </ShoppingListMetaText>
              </ShoppingListMeta>
            </ShoppingListInfo>
          </ShoppingListContainer>
        ))}
      </ShoppingLists>
    </Container>
  );
};

export default Dashboard;
