/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState, useCallback } from 'react';

import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import {
  Container,
  Header,
  HeaderContent,
  HeaderProfile,
  ContainerData,
  ShoppingListsTitle,
  ShoppingLists,
  ShoppingListItems,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import ShoppingListCard from '../../components/ShoppingListCard';

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

  const [shoppingListItemsVisible, setShoppingListItemsVisible] = useState(
    false,
  );

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
      <ContainerData>
        <ShoppingLists>
          <ShoppingListsTitle>Listas de Compras</ShoppingListsTitle>
          {shoppingLists.map((shoppingList) => (
            <div
              onClickCapture={() =>
                setShoppingListItemsVisible(!shoppingListItemsVisible)
              }
            >
              <ShoppingListCard shoppingList={shoppingList} />
            </div>
          ))}
        </ShoppingLists>
        {shoppingListItemsVisible && (
          <ShoppingListItems>
            <ShoppingListsTitle>Items da Lista de Compras</ShoppingListsTitle>
          </ShoppingListItems>
        )}
      </ContainerData>
    </Container>
  );
};

export default Dashboard;
