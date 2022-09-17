import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../services/formatCurrency";
import CartPageItem from "../components/CartPageItem";
import storeItems from "../data/items.json";
import { useNavigate } from "react-router-dom";

export function Cart() {
  const { cartItems } = useShoppingCart();
  const navigate = useNavigate();
  return (
    <>
      <div className="w-8/12 m-auto justify-center p-3">
        <header className="p-4 font-bold text-3xl ml-2 mt-6">Cart</header>
        {cartItems.map((item) => (
          <CartPageItem key={item.id} {...item} />
        ))}
        {cartItems.length === 0 ? (
          <h3 className="pl-6">
            Cart Item is empty.{" "}
            <span role="img" className="mt-5 text-3xl">
              🧐
            </span>
          </h3>
        ) : (
          <div className="flex justify-end mr-10 mt-10 mb-12">
            <h3 className="font-bold text-xl">Total: &nbsp;</h3>
            <span className="text-xl">
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </span>
          </div>
        )}
        {cartItems.length === 0 ? (
          ""
        ) : (
          <button
            onClick={() => navigate("/checkout")}
            className="m-auto bg-slate-200 w-full p-1 rounded-md hover:bg-slate-300 text-lg tracking-wider font-medium text-slate-800"
          >
            {" "}
            CHECKOUT{" "}
          </button>
        )}
      </div>
    </>
  );
}
