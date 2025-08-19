import { RegisterClientButton } from "./registerclientbutton";

export const ClientsHeader = () => {

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-screen-xl p-4 pt-6 pb-2">
          <h2 className="text-2xl font-semibold text-neutral-800">Clients</h2>
        </div>
      </div>
      
      <div className="w-full flex justify-center">
        <div className="flex justify-between items-center w-full max-w-screen-xl p-4 pt-0">
          <div className="flex-1 flex justify-end">
            <RegisterClientButton />
          </div>
        </div>
      </div>
    </>
  );
};
