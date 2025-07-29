import { ClientsHeader } from '@/components/clients/clientsheader';
import { ClientsTable } from '@/components/clients/clientstable';
import React from 'react';

export const Clients = () => {
  return (
    <>
      <div className="w-full max-w-screen-xl px-4 pt-4">
      </div>

      <ClientsHeader />
      <ClientsTable />
    </>
  );
};

