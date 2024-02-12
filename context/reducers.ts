import { ONBOARDING_PAGE_ACTION, PRODUCT_ACTIONS, ShoppingCartActions } from "./actionsType";
import { ProductType } from "./context";

export const productReducer = (state:ProductType[], action:PRODUCT_ACTIONS) => {
    
    switch (action.type) {
      case 'CREATE_PRODUCT':
        return [
          ...state,
          {
            id: action.payload.id,
            name: action.payload.name,
            price: action.payload.price,
          }
        ]
      case 'DELETE_PRODUCT':
        return [
          ...state.filter(product => product.id !== action.payload.id),
        ]
      default:
        return state;
    }
  }
  
  export const shoppingCartReducer = (state:number, action:ShoppingCartActions) => {
    
    switch (action.type) {
      case 'ADD_PRODUCT':
        return state + 1;
      default:
        return state;
    }
  }

  export const onBoardingPageReducter = (state:number,action:ONBOARDING_PAGE_ACTION)=>{
   
    switch (action.type) {
      case 'INCREASE_COUNTER':
        return state + 1;
      case 'DECREASE_COUNTER':
        return state-1;      
      default:
          return state;
    }
  }