import React from 'react'
import { SalesTable } from '../components/sales/salestable'
import { RegisterSaleButton } from '@/components/sales/registersalebutton'
import { SalesHeader } from '@/components/sales/salesheader'

export const Sales = () => {
  return (
    <>
      <SalesHeader />
      <SalesTable />
    </>
  )
}

