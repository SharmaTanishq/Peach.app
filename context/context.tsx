import React, { ReactNode, createContext, useReducer } from 'react';
import { onBoardingPageReducter, productReducer, shoppingCartReducer } from './reducers';
import { ONBOARDING_PAGE_ACTION, PRODUCT_ACTIONS, ShoppingCartActions } from './actionsType';

export type ProductType = {
  id: number;
  name: string;
  price: number;
}



type InitialStateType = {
  products: ProductType[];
  onBoardingPageIndex:number;
  shoppingCart: number;
}

const initialState = {
  products: [],
  onBoardingPageIndex:0,
  shoppingCart: 0,
}

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<PRODUCT_ACTIONS|ShoppingCartActions|ONBOARDING_PAGE_ACTION>;
}>({
  state: initialState,
  dispatch: () => null
});

const mainReducer = ({ products, shoppingCart,onBoardingPageIndex }:InitialStateType, action:PRODUCT_ACTIONS|ShoppingCartActions|ONBOARDING_PAGE_ACTION
    ) => ({
  products: productReducer(products, action as PRODUCT_ACTIONS),
  shoppingCart: shoppingCartReducer(shoppingCart, action as ShoppingCartActions ),
  onBoardingPageIndex:onBoardingPageReducter(onBoardingPageIndex,action as ONBOARDING_PAGE_ACTION)
});

const AppProvider: React.FC<BaseLayoutProps> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

interface BaseLayoutProps {
    children?: ReactNode;
  }

export { AppContext, AppProvider };