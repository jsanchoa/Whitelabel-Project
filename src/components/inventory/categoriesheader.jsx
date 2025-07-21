import { RegisterCategoryButton } from "./registercategorybutton";
import { SearchBar } from "./searchbar";

export const CategoriesHeader = () => {
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
          
        </div>

        <div className="flex-1 flex justify-end">
          <RegisterCategoryButton />
        </div>
      </div>
    </div>
  );
};