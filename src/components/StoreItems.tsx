import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../services/formatCurrency";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  favoriteItem: boolean;
};

export function StoreItems({
  id,
  name,
  price,
  imageUrl,
  favoriteItem,
}: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    toggleFavorite
  } = useShoppingCart();
  let quantity = getItemQuantity(id);
  return (
    <div key={id}>
      <div className="flex-col mt-24 bg-slate-100 m-1">
        <div className="p-5 m-1">
          <div className="flex cursor-pointer p-1">
            <span onClick={() => toggleFavorite(id)}>
              {favoriteItem === true ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
            </span>
          </div>
          <img
            src={imageUrl}
            alt={imageUrl}
            className="w-full h-72 object-contain m-auto"
          />
          <h1 className="flex mt-5 justify-center tracking-wide font-bold">
            {name}
          </h1>
          <span className="flex mt-1 justify-center">
            {formatCurrency(price)}
          </span>
        </div>
        <div className="flex flex-col m-auto w-full ">
          {quantity === 0 ? (
            <button
              onClick={() => {
                increaseCartQuantity(id);
              }}
              className="w-full mx-auto justify-center items-center bg-indigo-500 p-1 text-gray-50"
            >
              + Add To Cart
            </button>
          ) : (
            <div className="flex flex-col items-center gap-5 m-auto">
              <div className="flex flex-row items-center gap-5 m-auto">
                <button
                  onClick={() => increaseCartQuantity(id)}
                  className="w-full mx-auto justify-center items-center bg-indigo-500 p-1 text-gray-50 rounded-sm font-bold"
                >
                  +
                </button>
                <div className="">
                  <span className="">{quantity}</span> in cart.
                </div>
                <button
                  onClick={() => {
                    decreaseCartQuantity(id);
                  }}
                  className="w-full mx-auto justify-center items-center bg-indigo-500 p-1 text-gray-50 rounded-sm font-bold"
                >
                  -
                </button>
              </div>
              <button
                onClick={() => {
                  removeFromCart(id);
                }}
                className="w-full mx-auto justify-center bg-red-500 p-2 mb-2 text-gray-50 rounded-sm"
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
