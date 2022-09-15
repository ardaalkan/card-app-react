import storeItems from "../data/items.json";
import { useContext } from "react";
import { StoreItems } from "../components/StoreItems";
import { StoreToolbar } from "../components/StoreToolbar";
import { FilterContext } from "../context/FilterContext";

export function Store() {
  const { searchQuery } = useContext(FilterContext);

  return (
    <>
      <div className="w-8/12 h-72 m-auto grid sm:grid-cols-1 md:grid-cols-2 gap-1 justify-center p-3">
        <StoreToolbar />
        {storeItems.map((item) => (
          <StoreItems {...item} />
        ))}
      </div>
    </>
  );
}
//Property 'searchQuery' does not exist on type 'unknown' FIX THE searhQuery /store error.

// {storeItems
//   .filter(function (item) {
//     return item.name.toLocaleLowerCase().includes(searchQuery);
//   })
//   .map(function (item) {
//     return <StoreItems {...item} />;
//   })}
