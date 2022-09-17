import FavoriteItems from "../components/FavoriteItems";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Favorites() {
  const { favorite } = useShoppingCart();

  return (
    <>
      <div className="w-8/12 h-72 m-auto grid sm:grid-cols-1 md:grid-cols-2 gap-1 justify-center p-3">
        {favorite.length === 0 ? (
          <div className="mt-12 p-12 bg-slate-100 rounded-lg m-auto grid sm:grid-cols-1 md:grid-cols-2 justify-center col-span-2">
            <img
              src="/images/empty_favorite.jpg"
              alt="Empty Favorite Page"
              className="row-auto"
            />
            <span className="ml-6 font-bold tracking-wide">
              Favorite is not exist..
            </span>
          </div>
        ) : (
          favorite.map((item) => <FavoriteItems key={item.id} {...item} />)
        )}
      </div>
    </>
  );
}
