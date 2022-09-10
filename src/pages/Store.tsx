import storeItems from "../data/items.json";
import { StoreItems } from "../components/StoreItems";

export function Store() {
  return (
    <>
      <div className="w-8/12 h-72 m-auto grid sm:grid-cols-1 md:grid-cols-2 gap-1 justify-center p-3">
        {storeItems.map((item) => (
          <StoreItems {...item} />
        ))}
      </div>
    </>
  );
}
