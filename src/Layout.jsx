import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import { BreadCrumbPage } from "./components/breadcrumb";

export default function Layout({ children }) {
  const data = {
    user: {
      first_page: "Dashboard",
      second_page: "Management",
    },
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* Area del Breadcrumb */}
        <BreadCrumbPage {...data.user} />

        {/* Componente  */}
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
