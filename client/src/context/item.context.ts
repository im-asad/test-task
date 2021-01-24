import React from 'react';

import { IItemContext } from '../interface/item.interface';

const ItemContext = React.createContext<IItemContext>({
  items: [],
  getItems: () => {},
});

const ItemProvider = ItemContext.Provider;
const ItemConsumer = ItemContext.Consumer;

export { ItemProvider, ItemConsumer };
export default ItemContext;