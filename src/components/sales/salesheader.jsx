import { SearchBar } from "../inventory/searchbar"
import { RegisterSaleButton } from "./registersalebutton"


export const SalesHeader = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex justify-between items-center w-full max-w-screen-xl p-4">

        <div className="flex-1 flex justify-left">
          
        </div>

        <div className="flex-1 flex justify-end">
          <RegisterSaleButton/>
        </div>
      </div>
    </div>
  )
}
