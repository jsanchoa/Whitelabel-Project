import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { AppSidebar } from "./components/sidebar/app-sidebar";
import { BreadCrumbPage } from "./components/sidebar/breadcrumb";

export default function Layout({ children, data }) {

  return (
    <SidebarProvider>
      {/*  */}
      <AppSidebar />

      <SidebarInset>
        {/* Area del Breadcrumb */}
        <BreadCrumbPage {...data} />

        {/* Componente  */}
        {children}
        <Toaster />
      </SidebarInset>
    </SidebarProvider>
  );
}
