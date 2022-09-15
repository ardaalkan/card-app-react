import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";

type FavItemProps = {
  id: number;
};

export default function FavoriteItems({ id }: FavItemProps) {
  const { removeFavorite } = useShoppingCart();

  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div className="mt-12">
      <div className="flex border border-gray-400 shadow rounded-md max-w-md w-full mx-auto justify-between mt-12 p-4">
        <div className="flex">
          <img
            src={item?.imageUrl}
            alt="..loading"
            className="w-28 h-24 mr-3"
          />
          <div className="display-col my-auto">
            <h2 className="font-bold">{item?.name}</h2>
            <h3>Price: {item?.price}</h3>
          </div>
        </div>
        <div className="display-col my-auto">
          <button
            onClick={() => removeFavorite(item?.id)}
            className="p-1 mt-1 text-sm bg-sky-200 rounded-md hover:bg-sky-300"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
