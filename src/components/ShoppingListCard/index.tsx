import React from 'react';

import { format } from 'date-fns';

import {
  ShoppingListContainer,
  ShoppingListImage,
  ShoppingListInfo,
  ShoppingListName,
  ShoppingListMeta,
  Calendar,
  Info,
  ShoppingListMetaText,
} from './styles';

export interface IShoppingList {
  id: string;
  name: string;
  description: string;
  date: Date;
  user_id: string;
  image_url: string;
}

interface IPropsShoppingLists {
  shoppingList: IShoppingList;
}

const ShoppingListCard: React.FC<IPropsShoppingLists> = ({ shoppingList }) => {
  return (
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
  );
};

export default ShoppingListCard;
