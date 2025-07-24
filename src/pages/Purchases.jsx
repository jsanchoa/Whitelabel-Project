import { PurchasesHeader } from '@/components/Providers and Purchasing/purchases/purchasesheader';
import { PurchasesTable } from '@/components/Providers and Purchasing/purchases/purchasestable';
import React from 'react'

export const Purchases = () => {

  return (
      <>
        <PurchasesHeader />
        <PurchasesTable />
      </>
    );
}

