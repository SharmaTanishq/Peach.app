
type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
      ? {
          type: Key;
        }
      : {
          type: Key;
          payload: M[Key];
        }
  };



export enum Types{
    Create = 'CREATE_PRODUCT',
    Delete = 'DELETE_PRODUCT',
    Add = 'ADD_PRODUCT',
    Decrease = "DECREASE_COUNTER",
    Increase = "INCREASE_COUNTER"
}

export type ProductPayload = {
    [Types.Create] : {
      id: number;
      name: string;
      price: number;
    };
    [Types.Delete]: {
      id: number;
    }
  }

export type PRODUCT_ACTIONS = ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

type ShoppingCartPayload = {
    [Types.Add]: undefined;
  }


export type ShoppingCartActions = ActionMap<ShoppingCartPayload>[keyof ActionMap<ShoppingCartPayload>];

type ONBOARDING_PAGE_PAYLOAD={
    [Types.Decrease]:undefined;
    [Types.Increase]:undefined;
}

export type ONBOARDING_PAGE_ACTION = ActionMap<ONBOARDING_PAGE_PAYLOAD>[keyof ActionMap<ONBOARDING_PAGE_PAYLOAD>]