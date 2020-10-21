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

export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  image_url: string;
}

export interface ShoppingListItem {
  id: string;
  product_id: string;
  product: Product;
  shoppinglist_id: string;
  checked: boolean;
  date: Date;
  quantity: number;
  value: number;
  longitude: number;
  latitude: number;
}

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  const [shoppingLists, setShoppingLists] = useState<ShoppingList[]>([]);

  const [shoppingListItemsVisible, setShoppingListItemsVisible] = useState(
    false,
  );

  const [shoppingListItems, setShoppingListItems] = useState<
    ShoppingListItem[]
  >([]);

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

  const handleGetShoppingListItems = useCallback(
    (shoppingList: ShoppingList) => {
      api
        .get('/shoppinglistitems/findByShoppingListId', {
          params: { shoppinglist_id: shoppingList.id },
        })
        .then((response) => {
          const shoppingListItemsResponse: ShoppingListItem[] = response.data;
          setShoppingListItems(
            shoppingListItemsResponse.sort((a, b) => {
              if (a.product.name > b.product.name) {
                return 1;
              }
              return -1;
            }),
          );
        })
        .catch((err) => {
          setShoppingListItems([]);
        });
    },
    [],
  );

  useEffect(() => {
    handleGetShoppingLists();
  }, [handleGetShoppingLists]);

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
              key={shoppingList.id}
              onClickCapture={() => {
                setShoppingListItemsVisible(!shoppingListItemsVisible);
                handleGetShoppingListItems(shoppingList);
              }}
            >
              <ShoppingListCard shoppingList={shoppingList} />
            </div>
          ))}
        </ShoppingLists>
        {shoppingListItemsVisible && (
          <ShoppingListItems>
            <ShoppingListsTitle>Items da Lista de Compras</ShoppingListsTitle>
            {shoppingListItems.map((shoppingListItemAux) => (
              <ShoppingListsTitle>Items da Lista de Compras</ShoppingListsTitle>
            ))}
          </ShoppingListItems>
        )}
      </ContainerData>
    </Container>
  );
};

export default Dashboard;
