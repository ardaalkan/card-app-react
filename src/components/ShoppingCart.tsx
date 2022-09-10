import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../services/formatCurrency";
import CartItems from "./CartItems";
import storeItems from "../data/items.json";

type ShoppingCartProps = {
  isOpen: boolean;
};

export default function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-lg pb-5 flex flex-col space-y-6 overflow-y-scroll h-full">
          <header className="p-4 font-bold text-lg ml-2">Cart</header>
          {cartItems.map((item) => (
            <CartItems key={item.id} {...item} />
          ))}
          {cartItems.length === 0 ? (
            <h3 className="pl-6">
              Cart Item is empty.{" "}
              <span role="img" className="mt-5 text-3xl">
                🧐
              </span>
            </h3>
          ) : (
            <div className="flex justify-end mr-14">
              <h3 className="font-bold">Total: &nbsp;</h3>
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </div>
          )}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer"
        onClick={() => {
          closeCart();
        }}
      ></section>
    </main>
  );
}
