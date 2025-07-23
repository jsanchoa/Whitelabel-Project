import { FilterButton } from "./filterbutton";
import { RegisterClientButton } from "./registerclientbutton";
import { SearchBar } from "./searchbar";

export const ClientsHeader = () => {
  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="flex justify-between items-center w-full max-w-screen-xl p-4">
        <div className="flex-1">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="flex-1 flex justify-left">
          <FilterButton />
        </div>

        <div className="flex-1 flex justify-end">
          <RegisterClientButton />
        </div>
      </div>
    </div>
  );
};