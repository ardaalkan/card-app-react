import { createContext, ReactNode, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartItems: CartItem[];
  cartQuantity: number;
  toggleFavorite: (id: any) => any;
  removeFavorite: (id: any) => any;
  favorite: FavoriteItem[];
  favQuantity: number;
};

type CartItem = {
  id: number;
  quantity: number;
};

type FavoriteItem = {
  id: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );

  const [favorite, setFavorite] = useLocalStorage<FavoriteItem[]>(
    "favorite-items",
    []
  );

  const [isOpen, setIsOpen] = useState(false);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const favQuantity = favorite.length;

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function toggleFavorite(id: number) {
    setFavorite((favItems) => {
      if (favItems.find((item) => item.id === id) == null) {
        return [...favItems, { id }];
      } else {
        return favItems.map((fav) => {
          if (fav.id === id) {
            return { ...fav };
          } else {
            return fav;
          }
        });
      }
    });
  }

  // function toggleFavorite(id:number){
  //   favorite.find(function(rec:any){
  //     return rec.id === id;
  //   });
  //   const favRecUpdated = {
  //     ...favRecPrevious, favoriteItem: !favRecPrevious.favoriteItem,
  //   };
  //   const favDataNew: any = favorite.map(function(rec:any){
  //     return rec.id === id ? favRecUpdated : rec;
  //   });
  //   setFavorite(favDataNew);
  // }

  function removeFavorite(id: number) {
    setFavorite((favItems) => {
      return favItems.filter((fav) => fav.id !== id);
    });
  }

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
        favorite,
        toggleFavorite,
        removeFavorite,
        favQuantity,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
