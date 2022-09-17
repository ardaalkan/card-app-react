import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../services/formatCurrency";
import storeItems from "../data/items.json";

type CartPageItemType = {
  id: number;
  quantity: number;
};

export default function CartPageItem({ id, quantity }: CartPageItemType) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div className="flex h-48 mt-12 border-gray-300 shadow rounded-md p-1 w-full mx-auto justify-between">
      <div className="flex">
        <img
          src={item?.imageUrl}
          alt="..loading"
          className="w-48 h-44 mr-3 rounded-md"
        />
        <div className="display-col my-auto">
          <h2 className="font-bold text-xl">
            {item?.name} {quantity > 1 && <span>{quantity}x</span>}
          </h2>
          <h3>Price: {item?.price}</h3>
        </div>
      </div>
      <div className="display-col my-auto mr-12">
        <div className="text-xl"> {formatCurrency(item?.price * quantity)}</div>
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
