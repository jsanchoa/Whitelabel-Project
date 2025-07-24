import { PurchasesHeader } from '@/components/purchases/purchasesheader';
import { PurchasesTable } from '@/components/purchases/purchasestable';
import React from 'react'

export const Purchases = () => {

  return (
      <>
        <PurchasesHeader />
        <PurchasesTable />
      </>
    );
}

