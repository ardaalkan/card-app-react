import FavoriteItems from "../components/FavoriteItems";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Favorites() {
  const { favorite } = useShoppingCart();

  return (
    <>
      <div className="w-8/12 h-72 m-auto grid sm:grid-cols-1 md:grid-cols-2 gap-1 justify-center p-3">
        {favorite.map((item) => (
          <FavoriteItems key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}
