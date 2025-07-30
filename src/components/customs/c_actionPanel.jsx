import { FilterButton } from "./c_filterButton";
import { AddButton } from "./c_addButton";
import { SearchBar } from "./c_searchbar";


const filterOptions = [
  { value: "Active" },
  { value: "Inactive" },
  { value: "Pending" },
  
];

export const ActionPanel = () => {
  const handleSearch = (query) => {
    console.log("Selected:", query);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="flex justify-between items-center w-full max-w-screen-xl p-4">
        <div className="flex-1">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="flex-1 flex justify-left">
          <FilterButton options={filterOptions}/>
        </div>

        <div className="flex-1 flex justify-end">
          <AddButton />
        </div>
      </div>
    </div>
  );
};