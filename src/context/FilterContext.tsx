import { useContext, ReactNode, createContext } from "react";
import useSearchFilter from "../hooks/useSearchFilter";

type FilterContext = {
  searchQuery: any;
  setSearchQuery: React.Dispatch<any>;
};

type FilterContextProviderTypes = {
  children: ReactNode;
  searchQuery: any;
  setSearchQuery: React.Dispatch<any>;
};

const FilterContext = createContext({} as FilterContext);

export const useFilterContext = () => {
  return useContext(FilterContext);
};

function FilterContextProvider({ children }: FilterContextProviderTypes) {
  const { searchQuery, setSearchQuery } = useSearchFilter();

  return (
    <FilterContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </FilterContext.Provider>
  );
}

export { FilterContext, FilterContextProvider };
