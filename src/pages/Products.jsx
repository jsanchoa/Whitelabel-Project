import { ProductsHeader } from '@/components/inventory/productsheader';
import { ProductsTable } from '@/components/inventory/productstable';
import React from 'react'

export const Products = () => {

  return (
      <>
        <ProductsHeader />
        <ProductsTable />
      </>
    );
}

