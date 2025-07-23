import { DashboardHeader } from '@/components/inventory/dashboardheader'
import { ChartBarDefault } from '@/components/inventory/stockchart'
import React from 'react'

export const InventoryDashboard = () => {
  return (
    <div>
      <DashboardHeader />
      <ChartBarDefault />
    </div>
  )
}

