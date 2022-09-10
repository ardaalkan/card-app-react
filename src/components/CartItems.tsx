import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../services/formatCurrency";
import storeItems from "../data/items.json";

type CartItemProps = {
  id: number;
  quantity: number;
};

export default function CartItems({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div className="flex border border-gray-300 shadow rounded-md p-4 max-w-md w-full mx-auto justify-between mt-2">
      <div className="flex">
        <img src={item?.imageUrl} alt="..loading" className="w-28 h-24 mr-3" />
        <div className="display-col my-auto">
          <h2 className="font-bold">
            {item?.name} {quantity > 1 && <span>{quantity}x</span>}
          </h2>
          <h3>Price: {item?.price}</h3>
        </div>
      </div>
      <div className="display-col my-auto">
        <div> {formatCurrency(item?.price * quantity)}</div>
        <button
          onClick={() => removeFromCart(item?.id)}
          className="p-1 mt-1 text-sm bg-slate-200 rounded-md hover:bg-slate-300"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
