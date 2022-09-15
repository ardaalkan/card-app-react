import { useState } from "react";

interface setSearchQuery {
  searchQuery: string;
  setSearchQuery: React.Dispatch<any>;
}

function useSearchFilter() {
  const [searchQuery, setSearchQuery] = useState<setSearchQuery[]>();

  return {
    searchQuery,
    setSearchQuery,
  };
}

export default useSearchFilter;
